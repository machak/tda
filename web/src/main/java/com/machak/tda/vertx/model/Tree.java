
package com.machak.tda.vertx.model;

import java.util.LinkedHashSet;
import java.util.Set;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Tree {
    private static final Logger log = LogManager.getLogger(Tree.class);
    private final ObjectMapper mapper = new ObjectMapper();
    private Set<TreeNode> children = new LinkedHashSet<>();

    public void addNode(final TreeNode node) {
        children.add(node);
    }

    public Set<TreeNode> getChildren() {
        return children;
    }

    public void setChildren(final Set<TreeNode> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        try {
            return mapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            log.error("Error writing tree", e);
        }
        return "";
    }

}
