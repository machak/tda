/*
 * This file is part of TDA - Thread Dump Analysis Tool.
 *
 * TDA is free software; you can redistribute it and/or modify
 * it under the terms of the Lesser GNU General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * TDA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Lesser GNU General Public License for more details.
 *
 * You should have received a copy of the Lesser GNU General Public License
 * along with TDA; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * $Id: BeaJDKParser.java,v 1.12 2010-01-03 14:23:09 irockel Exp $
 */

package com.pironet.tda;

import java.io.BufferedReader;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.MutableTreeNode;

import com.pironet.tda.utils.DateMatcher;
import com.pironet.tda.utils.IconFactory;

import static sun.management.snmp.jvminstr.JvmThreadInstanceEntryImpl.ThreadStateMap.Byte0.waiting;

/**
 * Parses Bea/JRockit Thread Dumps
 *
 * @author irockel
 */
public class BeaJDKParser extends AbstractDumpParser {
    private static final Pattern AT_PATTERN = Pattern.compile("@");
    private MutableTreeNode nextDump = null;
    private Map threadStore = null;
    private int counter = 1; // Number of the thread dump
    private int lineCounter = 0;
    // private boolean foundClassHistograms = false;
    // private boolean withCurrentTimeStamp = false;

    /**
     * constructs a new instance of a bea jdk parser
     */
    public BeaJDKParser(BufferedReader bis, Map threadStore, int lineCounter, DateMatcher dm) {
        super(bis, dm);
        this.threadStore = threadStore;
        this.lineCounter = lineCounter;
    }

    /**
     * returns true if at least one more dump available, already loads it
     * (this will be returned on next call of parseNext)
     */
    public boolean hasMoreDumps() {
        // throw new UnsupportedOperationException("Not supported yet.");
        nextDump = parseNext();
        return (nextDump != null);
    }

    /**
     * parse the next thread dump from the stream passed with the constructor.
     *
     * @returns null if no more thread dumps were found.
     */
    public MutableTreeNode parseNext() {
        if (nextDump != null) {
            MutableTreeNode tmpDump = nextDump;
            nextDump = null;
            return (tmpDump);
        }
        boolean retry = false;

        do {

            try {
                Map<String, String> threads = new HashMap<>();
                ThreadDumpInfo overallTDI = new ThreadDumpInfo("Dump No. " + counter++, 0);
                DefaultMutableTreeNode threadDump = new DefaultMutableTreeNode(overallTDI);
                DefaultMutableTreeNode catThreads = new DefaultMutableTreeNode(new TableCategory("Threads", IconFactory.THREADS));
                threadDump.add(catThreads);
                DefaultMutableTreeNode catWaiting = new DefaultMutableTreeNode(new TableCategory("Threads waiting for Monitors", IconFactory.THREADS_WAITING));

                DefaultMutableTreeNode catSleeping = new DefaultMutableTreeNode(new TableCategory("Threads sleeping on Monitors", IconFactory.THREADS_SLEEPING));

                DefaultMutableTreeNode catLocking = new DefaultMutableTreeNode(new TableCategory("Threads locking Monitors", IconFactory.THREADS_LOCKING));

                // create category for monitors with disabled filtering.
                DefaultMutableTreeNode catMonitors = new DefaultMutableTreeNode(new TreeCategory("Monitors", IconFactory.MONITORS, false));
                DefaultMutableTreeNode catMonitorsLocks = new DefaultMutableTreeNode(new TreeCategory("Monitors without locking thread", IconFactory.MONITORS_NO_LOCKS, false));

                String title = null;
                StringBuffer content = null;
                StringBuffer lContent = null;
                StringBuffer sContent = null;
                StringBuffer wContent = null;
                boolean locked = true; // true means we haven't hit the beggining of a thread dump yet
                final MonitorMap mmap = new MonitorMap();
                final Stack<String> monitorStack = new Stack<>();
                int singleLineCounter = 0;

                while (getBis().ready()) {
                    String line = getBis().readLine();
                    lineCounter++;
                    singleLineCounter++;
                    if (locked) {  // Are we outside of a thread dump ?
                        if (line.contains("===== FULL THREAD DUMP ===============")) {
                            locked = false;
                        }
                    } else {  // Alright we're already inside a dump
                        if (line.contains("-- end of trace")) {
                            System.out.print("x");
                        }
                        if (line.startsWith("\"")) { // Did we hit a new thread ?
                            String stringContent = content != null ? content.toString() : null;
                            if (title != null) { // Let's store the previous thread
                                threads.put(title, content.toString());
                                content.append("</pre></pre>");
                                addToCategory(catThreads, title, null, stringContent, singleLineCounter, true);
                            }
                            if (wContent != null) {
                                wContent.append("</b><hr>");
                                addToCategory(catWaiting, title, null, stringContent, singleLineCounter, true);
                                wContent = null;
                            }
                            if (sContent != null) {
                                sContent.append("</b><hr>");
                                addToCategory(catSleeping, title, null, stringContent, singleLineCounter, true);
                                sContent = null;
                            }
                            if (lContent != null) {
                                lContent.append("</b><hr>");
                                addToCategory(catLocking, title, null, stringContent, singleLineCounter, true);
                                lContent = null;
                            }
                            singleLineCounter = 0;
                            while (!monitorStack.empty()) {
                                mmap.parseAndAddThread((String)monitorStack.pop(), title, content.toString());
                            }

                            title = line;
                            content = new StringBuffer("<body bgcolor=\"ffffff\"><pre><font size=" + TDA.getFontSizeModifier(-1) + '>');
                            content.append(line);
                            content.append('\n');
                        } else if (line.contains("at ")) { // enganado por [fat lock]
                            content.append(line);
                            content.append('\n');
                        } else if (line.contains("-- Waiting for notification")) {
                            String newLine = linkifyMonitor(line);
                            content.append(newLine);
                            if (sContent == null) {
                                sContent = new StringBuffer("<body bgcolor=\"ffffff\"><font size=" + TDA.getFontSizeModifier(-1) + "><b>");
                            }
                            sContent.append(newLine);
                            monitorStack.push(line);
                            sContent.append('\n');
                            content.append('\n');
                        }
                    }
                }
            } catch (Exception e) {
                System.out.println(e.toString());
            }
        } while (retry); // Keep parsing until we get a full thread dump, or the file ends 
        return (null);
        // throw new UnsupportedOperationException("Not supported yet.");
    }

    private String linkifyMonitor(String line) {
        if (line != null && line.indexOf('@') >= 0) {
            String begin = line.substring(0, line.indexOf('@'));
            String monitor = line.substring(line.indexOf('@'), line.indexOf('[') + 1);
            String end = line.substring(line.indexOf('>') + 1);
            monitor = AT_PATTERN.matcher(monitor).replaceAll("<a href=\"monitor://" + monitor + "\">&lt;");
            monitor = monitor.substring(0, monitor.length() - 1) + "&gt;</a>";
            return (begin + monitor + end);
        } else {
            return (line);
        }
    }

    public boolean isFoundClassHistograms() {
        // bea parser doesn't support class histograms
        return false;
    }

    public void parseLoggcFile(InputStream loggcFileStream, DefaultMutableTreeNode root) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public void setDumpHistogramCounter(int value) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    /**
     * check if the passed logline contains the beginning of a Bea jdk thread
     * dump.
     *
     * @param logLine the line of the logfile to test
     * @return true, if the start of a bea thread dump is detected.
     */
    public static boolean checkForSupportedThreadDump(String logLine) {
        return (logLine.trim().contains("===== FULL THREAD DUMP ==============="));
    }

    protected String[] getThreadTokens(String name) {
        String patternMask = "^.*\"([^\"]+)\".*id=([^ ]+).*tid=([^ ]+).*" +
                "prio=([^ ]+) ([^,]+,? ?[^,]+?,? ?[^,]+?,? ?[^,]+?)(, daemon)?$";
        Pattern p = Pattern.compile(patternMask);
        Matcher m = p.matcher(name);
        System.out.println(m.matches());
        for (int iLoop = 1; iLoop < m.groupCount(); iLoop++) {
            System.out.println(iLoop + ": " + m.group(iLoop));
        }

        String[] tokens = new String[7];
        tokens[0] = m.group(1); // name
        tokens[2] = m.group(4); // prio
        tokens[3] = m.group(3); // tid
        tokens[4] = m.group(2); // nid
        tokens[5] = m.group(5); // State

        return (tokens);
    }
}
