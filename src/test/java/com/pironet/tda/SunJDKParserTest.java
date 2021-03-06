/*
 * SunJDKParserTest.java
 *
 * This file is part of TDA - Thread Dump Analysis Tool.
 *
 * Foobar is free software; you can redistribute it and/or modify
 * it under the terms of the Lesser GNU General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Foobar is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Lesser GNU General Public License for more details.
 *
 * You should have received a copy of the Lesser GNU General Public License
 * along with Foobar; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * $Id: SunJDKParserTest.java,v 1.9 2008-11-21 09:20:19 irockel Exp $
 */
package com.pironet.tda;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.swing.tree.MutableTreeNode;

import org.apache.commons.io.IOUtils;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * test parsing of log files from sun vms.
 *
 * @author irockel
 */
public class SunJDKParserTest extends TestCase {

    public SunJDKParserTest(String testName) {
        super(testName);
    }

    protected void setUp() throws Exception {
    }

    protected void tearDown() throws Exception {
    }

    public static Test suite() {

        return new TestSuite(SunJDKParserTest.class);
    }

    /**
     * Test of hasMoreDumps method, of class com.pironet.tda.SunJDKParser.
     */
    public void testDumpLoad() throws IOException {
        System.out.println("dumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/test.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            Vector<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if three dumps are in it.
            assertEquals(3, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    /**
     * Test of isFoundClassHistograms method, of class com.pironet.tda.SunJDKParser.
     */
    public void testIsFoundClassHistograms() throws IOException {
        System.out.println("isFoundClassHistograms");
        DumpParser instance = null;
        InputStream fis = null;
        try {
            fis = getClass().getResourceAsStream("/data/testwithhistogram.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            Vector<MutableTreeNode> topNodes = new Vector<>();
            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            boolean expResult = true;
            boolean result = instance.isFoundClassHistograms();
            assertEquals(expResult, result);
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    public void test64BitDumpLoad() throws IOException {
        System.out.println("64BitDumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/test64bit.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            Vector<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if one dump was found.
            assertEquals(1, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    public void testSAPDumps() throws IOException {
        System.out.println("SAPDumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/sapdump.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            Vector<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if two dump were found.
            assertEquals(2, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    public void testHPDumps() throws IOException {
        System.out.println("HPDumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/hpdump.log");
            final Map<String, Map<String, String>> dumpMap = new HashMap<>();
            List<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if two dump were found.
            assertEquals(2, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    public void testRemoteVisualVMDumps() throws IOException {
        System.out.println("VisualVMDumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/visualvmremote.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            Vector<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if two dump were found.
            assertEquals(1, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }

    public void testURLThreadNameDumps() throws IOException {
        System.out.println("URLThreadNameDumpLoad");
        InputStream fis = null;
        DumpParser instance = null;

        try {
            fis = getClass().getResourceAsStream("/data/urlthread.log");
            Map<String, Map<String, String>> dumpMap = new HashMap<>();
            Vector<MutableTreeNode> topNodes = new Vector<>();
            instance = DumpParserFactory.get().getDumpParserForLogfile(fis, dumpMap, false, 0);

            assertTrue(instance instanceof SunJDKParser);

            while (instance.hasMoreDumps()) {
                topNodes.add(instance.parseNext());
            }

            // check if two dump were found.
            assertEquals(1, topNodes.size());
        } finally {
            IOUtils.closeQuietly(instance);
            IOUtils.closeQuietly(fis);
        }
    }
}
