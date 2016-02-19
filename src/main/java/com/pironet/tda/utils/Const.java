

package com.pironet.tda.utils;

import java.awt.Dimension;

import javax.swing.Icon;
import javax.swing.ImageIcon;

import com.pironet.tda.TDA;

public final class Const {

    public static final String ICON_THREAD = "thread.png";
    public static final ImageIcon THREAD = TDA.createImageIcon(ICON_THREAD);
    public static final String ICON_HISTOGRAM = "histogram.png";
    public static final ImageIcon HISTOGRAM = TDA.createImageIcon(ICON_HISTOGRAM);
    public static final String ICON_BLOCKING = "block_thread.png";
    public static final ImageIcon BLOCKING = TDA.createImageIcon(ICON_BLOCKING);
    public static final String ICON_CLIPBOARD = "clipboard.png";
    public static final ImageIcon CLIPBOARD = TDA.createImageIcon(ICON_CLIPBOARD);
    public static final String ICON_THREAD_DUMP = "dump.png";
    public static final ImageIcon DUMP = TDA.createImageIcon(ICON_THREAD_DUMP);
    public static final String ICON_ROOT = "root.png";
    public static final ImageIcon ROOT = TDA.createImageIcon(ICON_ROOT);
    public static final String ICON_LOG_FILE = "logfile.png";
    public static final ImageIcon LOG_FILE = TDA.createImageIcon(ICON_LOG_FILE);
    public static final String ICON_FILTERS = "filter.png";
    public static final String ICON_HELP = "help.png";
    public static final String ICON_FILE_OPEN = "open.png";
    public static final String ICON_CLOSE_FILE = "close.png";
    public static final String ICON_EMPTY = "Empty.gif";
    public static final String ICON_EXPANDED = "expand.png";
    public static final String ICON_COLLAPSED = "collapse.png";
    public static final String ICON_LR_THREADS = "find.png";
    public static final String ICON_CUSTOM_CATEGORY = "category.png";
    public static final String ICON_PREFERENCES = "preferences.png";
    public static final String ICON_ABOUT = "About.gif";
    public static final String ICON_DOCUMENT = "Document.gif";
    public static final String ICON_TDA = "tda.png";
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
    public static final String AA_TEXT_INFO_PROPERTY_KEY = "AATextInfoPropertyKey";
    public static final int FONT_SIZE = 12;
    public static final Dimension EMPTY_DIMENSION = new Dimension(400, 400);
    public static final int MIN_RIGHT_PANE_SIZE = 600;
    public static int DIVIDER_SIZE = 4;
    static int DEFINED_ROWS = 3;

    private Const() {

    }

}
