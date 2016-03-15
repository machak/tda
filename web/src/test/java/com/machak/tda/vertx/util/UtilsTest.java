package com.machak.tda.vertx.util;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;

import com.machak.tda.vertx.model.Tree;
import com.pironet.tda.Context;
import com.pironet.tda.DumpParser;
import com.pironet.tda.DumpParserFactory;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

import static org.junit.Assert.*;

public class UtilsTest {

    private static final Logger log = LogManager.getLogger(UtilsTest.class);

    @Test
    public void convertNode() throws Exception {
        final Map<String, Map<String, String>> dumpMap = new HashMap<>();
        final int dumpCounter = 0;
        final InputStream stream = getClass().getResourceAsStream("/test.log");
        final DumpParser dp = DumpParserFactory.get().getDumpParserForLogfile(new Context(Context.ENV.WEB), stream, dumpMap, false, dumpCounter);
        final DefaultMutableTreeNode node = new DefaultMutableTreeNode();
        while ((dp != null) && dp.hasMoreDumps()) {
            node.add(dp.parseNext());
        }
        final Tree tree = Utils.convertNode(node);
        assertNotNull(tree);
        log.info("tree {}", tree);
    }
}