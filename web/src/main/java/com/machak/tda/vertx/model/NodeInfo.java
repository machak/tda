

package com.machak.tda.vertx.model;

import com.pironet.tda.ThreadInfo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class NodeInfo {
    private static final Logger log = LogManager.getLogger(NodeInfo.class);
    private String threadId;
    private String title;
    private String threadState;

    public NodeInfo(final ThreadInfo threadInfo) {
        if (threadInfo != null) {
            final String[] tokens = threadInfo.getTokens();
            if (tokens != null && tokens.length == 3) {
                title = tokens[0];
                threadId = tokens[1];
                threadState = tokens[2];
            } else {
                log.warn("Invalid tokens {}", (Object[])tokens);
            }

        }
    }

    public String getThreadId() {
        return threadId;
    }

    public void setThreadId(final String threadId) {
        this.threadId = threadId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getThreadState() {
        return threadState;
    }

    public void setThreadState(final String threadState) {
        this.threadState = threadState;
    }
}
