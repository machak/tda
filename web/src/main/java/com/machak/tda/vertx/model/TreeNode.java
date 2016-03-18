

package com.machak.tda.vertx.model;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pironet.tda.TableCategory;
import com.pironet.tda.ThreadDumpInfo;
import com.pironet.tda.ThreadInfo;
import com.pironet.tda.TreeCategory;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class TreeNode {

    private static int next = 0;
    private static final Logger log = LogManager.getLogger(TreeNode.class);
    private String overview;
    private String content;
    @JsonProperty("text")
    private String name;
    private String id;
    private List<TreeNode> children = new ArrayList<>();
    private static boolean added = false;
    private NodeInfo nodeInfo;

    public TreeNode() {
        this.id = "id" + next++;
    }

    public TreeNode(final javax.swing.tree.TreeNode node) {
        this.name = node.toString();
        if (node instanceof DefaultMutableTreeNode) {
            final DefaultMutableTreeNode mutableTreeNode = (DefaultMutableTreeNode)node;

            final Object userObject = mutableTreeNode.getUserObject();
            if (userObject instanceof ThreadDumpInfo) {
                final ThreadDumpInfo threadDumpInfo = (ThreadDumpInfo)userObject;
                overview = threadDumpInfo.getOverview();
                this.addNode(new TreeNode(threadDumpInfo));
            } else if (userObject instanceof TableCategory) {
                final TableCategory tableCategory = (TableCategory)userObject;
                this.addNode(new TreeNode(tableCategory));
            } else if (userObject instanceof TreeCategory) {
                final TreeCategory treeCategory = (TreeCategory)userObject;
                this.addNode(new TreeNode(treeCategory));
            } else if (userObject instanceof ThreadInfo) {
                final ThreadInfo threadInfo = (ThreadInfo)userObject;
                this.addNode(new TreeNode(threadInfo));
            } else {
                log.error("Missing data processing for: {}", userObject.getClass());
            }
        }
        if (node.getChildCount() > 0) {
            final Enumeration children = node.children();
            while (children.hasMoreElements()) {
                final javax.swing.tree.TreeNode kid = (javax.swing.tree.TreeNode)children.nextElement();
                addNode(new TreeNode(kid));
            }
        }
    }

    public TreeNode(final ThreadDumpInfo dumpInfo) {
        this.name = dumpInfo.getName();
    }

    public TreeNode(final TableCategory category) {
        this.name = category.getName();
        final DefaultMutableTreeNode rootNode = category.getRootNode();
        if (rootNode != null) {
            final Enumeration children = rootNode.children();
            while (children.hasMoreElements()) {
                final DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode)children.nextElement();
                addNode(new TreeNode(treeNode));
            }

        }
        log.info("category {}", category);
    }

    public TreeNode(final TreeCategory treeCategory) {
        this.name = treeCategory.getName();
        final DefaultMutableTreeNode rootNode = treeCategory.getRootNode();
        if (rootNode != null) {
            final Enumeration children = rootNode.children();
            while (children.hasMoreElements()) {
                final DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode)children.nextElement();
                addNode(new TreeNode(treeNode));
            }

        }

        log.info("treeCategory {}", treeCategory);
    }

    public TreeNode(final ThreadInfo threadInfo) {
        this.name = threadInfo.getName() + "COUNT: " + threadInfo.getChildCount();
        this.content = threadInfo.getContent();
    }

    public void addNode(final TreeNode node) {
        children.add(node);
    }

    public List<TreeNode> getChildren() {
        return children;
    }

    public void setChildren(final List<TreeNode> children) {
        this.children = children;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(final String content) {
        this.content = content;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(final String overview) {
        this.overview = overview;
    }

    @Override
    public String toString() {
        return "TreeNode{" +
                "title='" + name + '\'' +
                ", children=" + children +
                '}';
    }

}
