
package com.machak.tda.vertx.util;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import com.machak.tda.vertx.model.Tree;
import com.pironet.tda.Context;
import com.pironet.tda.DumpParser;
import com.pironet.tda.DumpParserFactory;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

public final class Utils {
    private static final Logger log = LogManager.getLogger(Utils.class);


    private Utils() {
    }

    public static Tree convertNode(final DefaultMutableTreeNode node) {
        final Tree tree = new Tree();
        if (node == null) {
            return tree;
        }
        final int count = node.getChildCount();
        for (int i = 0; i < count; i++) {
            final TreeNode kid = node.getChildAt(i);
            tree.addNode(new com.machak.tda.vertx.model.TreeNode(kid));
        }

        return tree;
    }

    public static DefaultMutableTreeNode parseDumpFile(final Class<?> clazz, final String resourcePath) {
        final Map<String, Map<String, String>> dumpMap = new HashMap<>();
        final int dumpCounter = 0;
        final InputStream stream = clazz.getResourceAsStream(resourcePath);
        final DumpParser dp = DumpParserFactory.get().getDumpParserForLogfile(new Context(Context.ENV.WEB), stream, dumpMap, false, dumpCounter);
        final DefaultMutableTreeNode node = new DefaultMutableTreeNode();
        while ((dp != null) && dp.hasMoreDumps()) {
            node.add(dp.parseNext());
        }
        return node;
    }
}
