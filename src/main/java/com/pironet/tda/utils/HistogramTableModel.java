/*
 * HistogramTableModel.java
 *
 * Thread Dump Analysis Tool, parses Thread Dump input and displays it as tree
 *
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
 * $Id: HistogramTableModel.java,v 1.9 2006-05-02 14:22:31 irockel Exp $
 */
package com.pironet.tda.utils;

import java.util.List;
import java.util.Vector;
import java.util.regex.Pattern;

import javax.swing.table.AbstractTableModel;

import com.google.common.base.Strings;

/**
 * Provides table data model for the display of class histograms.
 *
 * @author irockel
 */
public class HistogramTableModel extends AbstractTableModel {
    private static final Pattern LT_PATTERN = Pattern.compile("<");
    private static final Pattern GT_PATTERN = Pattern.compile(">");
    private static final Pattern BR_PATTERN = Pattern.compile("\\[\\]");
    private static final long serialVersionUID = -3592017205042118981L;

    private List<Entry> elements = new Vector<>();

    private List<Entry> filteredElements = null;

    private String[] columnNames = {"class name",
            "instance count",
            "#bytes"};

    private boolean oom;

    private long bytes;

    private long instances;

    private String filter;

    private boolean ignoreCase = false;

    private boolean showHotspotClasses = false;

    private boolean incomplete = false;

    /**
     * Creates a new instance of HistogramTableModel
     */


    public void addEntry(String className, int instanceCount, int bytes) {
        elements.add(new Entry(className, instanceCount, bytes));
    }

    public Object getValueAt(int rowIndex, int columnIndex) {
        if (filteredElements != null) {
            return (getValueAt(filteredElements, rowIndex, columnIndex));
        } else {
            return (getValueAt(elements, rowIndex, columnIndex));
        }
    }

    private Object getValueAt(List<Entry> elements, int rowIndex, int columnIndex) {
        switch (columnIndex) {
            case 0: {
                return elements.get(rowIndex).className;
            }
            case 1: {
                return elements.get(rowIndex).bytes;
            }
            case 2: {
                return elements.get(rowIndex).instanceCount;
            }
        }
        return null;
    }

    public String getColumnName(int col) {
        return columnNames[col];
    }

    public int getRowCount() {
        if (filteredElements != null) {
            return filteredElements.size();
        } else {
            return elements.size();
        }
    }

    public int getColumnCount() {
        return Const.DEFINED_ROWS;
    }

    public Class getColumnClass(int c) {
        return getValueAt(0, c).getClass();
    }

    private void setOOM(boolean value) {
        oom = value;
    }

    public boolean isOOM() {
        return (oom);
    }

    public void setBytes(long value) {
        bytes = value;
    }

    public long getBytes() {
        return (bytes);
    }

    public void setInstances(long value) {
        instances = value;
    }

    public long getInstances() {
        return (instances);
    }

    public void setIncomplete(boolean value) {
        incomplete = value;
    }

    public boolean isIncomplete() {
        return (incomplete);
    }

    /**
     * set filter to the value and revalidate model, model saves original data,
     * so it can be refiltered.
     *
     * @param value the filter string
     */
    public void setFilter(String value) {
        filter = value;
        if (isIgnoreCase()) {
            value = value.toLowerCase();
        }

        if (Strings.isNullOrEmpty(value) && isShowHotspotClasses()) {
            filteredElements = null;
        } else {
            filteredElements = new Vector<>();
            for (Entry element : elements) {
                if (isIgnoreCase()) {
                    if (element.className.toLowerCase().contains(value)) {
                        filteredElements.add(element);
                    }
                } else {
                    if (isNotHotspotClass(element.className) && (Strings.isNullOrEmpty(value) || (element.className.contains(value)))) {
                        filteredElements.add(element);
                    }
                }
            }
        }
    }

    /**
     * check if the className is an internal hotspot class
     *
     * @param className the name of the class
     */
    private boolean isNotHotspotClass(String className) {
        //System.out.println("className" + className + " eval=" + (!isShowHotspotClasses() && className.startsWith("<")));
        return (isShowHotspotClasses() || !(className.contains("[internal HotSpot]")));
    }

    public void setShowHotspotClasses(boolean value) {
        if (showHotspotClasses != value) {
            showHotspotClasses = value;
            setFilter(getFilter());
        }
    }

    private boolean isShowHotspotClasses() {
        return (showHotspotClasses);
    }

    public String getFilter() {
        return (filter);
    }

    public void setIgnoreCase(boolean value) {
        if (ignoreCase != value) {
            ignoreCase = value;
            // revalidate
            setFilter(getFilter());
        }
    }

    public boolean isIgnoreCase() {
        return (ignoreCase);
    }

    public class Entry {
        private String className;
        private int instanceCount;
        private int bytes;

        public Entry(String className, int instanceCount, int bytes) {
            this.className = parseClassName(className);

            this.instanceCount = instanceCount;
            this.bytes = bytes;
        }

        /**
         * resolve classname to something more human readable.
         */
        private String parseClassName(String className) {
            String result = className;
            if (className.trim().endsWith("[I")) {
                result = "<html><body><b>int[]</b></body></html>";
            } else if (className.trim().endsWith("[B")) {
                result = "<html><body><b>byte[]</b></body></html>";
            } else if (className.trim().endsWith("[C")) {
                result = "<html><body><b>char[]</b></body></html>";
            } else if (className.trim().endsWith("[L")) {
                result = "<html><body><b>long[]</b></body></html>";
            } else if (className.trim().startsWith("<")) {
                className = LT_PATTERN.matcher(className).replaceAll("&lt;");
                className = GT_PATTERN.matcher(className).replaceAll("&gt;");
                result = "<html><body><i><b>" + className + "</i></b> [internal HotSpot]</i></body></html>";
            } else if (className.lastIndexOf('.') > 0) {
                /*if(className.indexOf("OutOfMemory") >= 0) {
                    setOOM(true);
                }*/ // that doesn't work this way

                result = "<html><body>" + className.substring(0, className.lastIndexOf('.') + 1) + "<b>" +
                        className.substring(className.lastIndexOf('.') + 1) + "</b></body></html>";
            }
            if (className.trim().startsWith("[[")) {
                result = BR_PATTERN.matcher(result).replaceAll("[][]");
            }

            return (result);
        }
    }
}
