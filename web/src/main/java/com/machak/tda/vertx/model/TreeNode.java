

package com.machak.tda.vertx.model;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import com.pironet.tda.TableCategory;
import com.pironet.tda.ThreadDumpInfo;
import com.pironet.tda.TreeCategory;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class TreeNode {

    private static final Logger log = LogManager.getLogger(TreeNode.class);
    private String name;
    private List<TreeNode> children = new ArrayList<>();

    public TreeNode(final javax.swing.tree.TreeNode node) {
        this.name = node.toString();
        if (node instanceof DefaultMutableTreeNode) {
            final DefaultMutableTreeNode mutableTreeNode = (DefaultMutableTreeNode)node;

            final Object userObject = mutableTreeNode.getUserObject();
            if(userObject instanceof ThreadDumpInfo){
                final ThreadDumpInfo threadDumpInfo = (ThreadDumpInfo)userObject;
                this.addNode(new TreeNode(threadDumpInfo));
            }else if(userObject instanceof TableCategory){
                final TableCategory tableCategory = (TableCategory)userObject;
                this.addNode(new TreeNode(tableCategory));
            }else if(userObject instanceof TreeCategory){
                final TreeCategory treeCategory = (TreeCategory)userObject;
                this.addNode(new TreeNode(treeCategory));
            }else{
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
        log.info("category {}", category);
    }

    public TreeNode(final TreeCategory treeCategory) {
        log.info("treeCategory {}", treeCategory);
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

    @Override
    public String toString() {
        return "TreeNode{" +
                "title='" + name + '\'' +
                ", children=" + children +
                '}';
    }
}
