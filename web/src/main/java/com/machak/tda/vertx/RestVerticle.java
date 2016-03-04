
package com.machak.tda.vertx;

import com.google.common.base.Strings;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;

public class RestVerticle extends AbstractVerticle {
    public static final int DEFAULT_PORT = 8080;
    public static final String PROP_PORT_NUMBER = "port.number";

    @Override
    public void start(Future<Void> future) {
        vertx
                .createHttpServer()
                .requestHandler(r -> {
                    r.response().end("<h1>Nothing in here dummy</h1>");
                })
                .listen(getPortNumber(), result -> {
                    if (result.succeeded()) {
                        future.complete();
                    } else {
                        future.fail(result.cause());
                    }
                });
    }

    private int getPortNumber() {
        final String port = System.getProperty(PROP_PORT_NUMBER);
        if (Strings.isNullOrEmpty(port)) {
            return DEFAULT_PORT;
        }
        return Integer.parseInt(port);
    }

}
