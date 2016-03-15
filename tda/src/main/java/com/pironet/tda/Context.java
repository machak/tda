

package com.pironet.tda;

public final class Context {

    private final ENV environment;

    public Context(final ENV environment) {
        this.environment = environment;
    }

    public ENV getEnvironment() {
        return environment;
    }

    public enum ENV {
        DESKTOP, WEB
    }
}
