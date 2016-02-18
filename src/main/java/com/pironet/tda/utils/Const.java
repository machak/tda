

package com.pironet.tda.utils;

import javax.swing.Icon;
import javax.swing.ImageIcon;

import com.pironet.tda.TDA;

public final class Const {

    public static final String ICON_THREAD = "thread.png";
    public static final ImageIcon THREAD = TDA.createImageIcon(ICON_THREAD);
    public static final String ICON_HISTOGRAM = "Histogram.gif";
    public static final ImageIcon HISTOGRAM = TDA.createImageIcon(ICON_HISTOGRAM);
    public static final String ICON_BLOCKING = "blocking.png";
    public static final ImageIcon BLOCKING = TDA.createImageIcon(ICON_BLOCKING);
    public static final String ICON_THREAD_DUMP = "ThreadDump.gif";
    public static final ImageIcon DUMP = TDA.createImageIcon(ICON_THREAD_DUMP);
    public static final String ICON_ROOT = "root.png";
    public static final ImageIcon ROOT = TDA.createImageIcon(ICON_ROOT);
    public static final String ICON_LOG_FILE = "LogfileContent.gif";
    public static final ImageIcon LOG_FILE = TDA.createImageIcon(ICON_LOG_FILE);
    public static final String ICON_FILTERS = "Filters.gif";
    public static final String ICON_HELP = "Help.gif";
    public static final String ICON_FILE_OPEN = "FileOpen.gif";
    public static final String ICON_CLOSE_FILE = "CloseFile.gif";
    public static final String ICON_EMPTY = "Empty.gif";
    public static final String ICON_EXPANDED = "Expanded.gif";
    public static final String ICON_COLLAPSED = "Collapsed.gif";
    public static final String ICON_LR_THREADS = "FindLRThreads.gif";
    public static final String ICON_CUSTOM_CATEGORY = "CustomCat.gif";
    public static final String ICON_PREFERENCES = "Preferences.gif";
    public static final String ICON_ABOUT = "About.gif";
    public static final String ICON_DOCUMENT = "Document.gif";
    public static final String ICON_TDA = "TDA.gif";
    public static final String ICON_WAITING = "waiting.png";
    public static final String ICON_SLEEP = "sleep.png";
    public static final String ICON_LOCKING = "locking.png";
    public static final String ICON_DEAD = "dead.png";
    public static final String ICON_DIFF_DUMPS = "DiffDumps.gif";
    public static final String ICON_MONITORS = "monitors.png";
    public static final String ICON_MONITORS_GREEN = "monitor_green.png";
    public static final Icon[] ICONS = {
            TDA.createImageIcon(ICON_THREAD),
            TDA.createImageIcon(ICON_WAITING),
            TDA.createImageIcon(ICON_SLEEP),
            TDA.createImageIcon(ICON_LOCKING),
            TDA.createImageIcon(ICON_DEAD),
            TDA.createImageIcon(ICON_DIFF_DUMPS),
            TDA.createImageIcon(ICON_MONITORS),
            TDA.createImageIcon(ICON_MONITORS_GREEN),
            TDA.createImageIcon(ICON_CUSTOM_CATEGORY)
    };

    private Const() {

    }

}
