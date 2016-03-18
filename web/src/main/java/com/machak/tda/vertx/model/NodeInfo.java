

package com.machak.tda.vertx.model;

public class NodeInfo {
   private String threadId;
   private String title;
   private String threadState;

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
