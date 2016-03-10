
package com.machak.tda.vertx;

import javax.swing.tree.DefaultMutableTreeNode;

import com.google.common.base.Strings;
import com.machak.tda.vertx.util.Utils;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.json.Json;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.StaticHandler;

public class RestVerticle extends AbstractVerticle {
    public static final int DEFAULT_PORT = 8080;
    public static final String PROP_PORT_NUMBER = "port.number";

    @Override
    public void start(Future<Void> future) {
        //############################################
        // REST MOUNTS
        //############################################

        final Router router = Router.router(vertx);
        //############################################
        // STATIC
        //############################################

        router.route("/css/*").handler(StaticHandler.create("css"));
        router.route("/images/*").handler(StaticHandler.create("images"));
        router.route("/js/*").handler(StaticHandler.create("js"));
        router.route("/").handler(StaticHandler.create());
        //############################################
        // REST
        //############################################
        router.get("/api/version").handler(this::version);
        router.get("/api/tree").handler(this::tree);
        //############################################
        // START APP
        //############################################
        vertx.createHttpServer()
                .requestHandler(router::accept)
                .listen(
                        getPortNumber(),
                        result -> {
                            if (result.succeeded()) {
                                future.complete();
                            } else {
                                future.fail(result.cause());
                            }
                        }
                );

    }

    private void tree(final RoutingContext context) {
        final String resourcePath = "/test.log";
        final DefaultMutableTreeNode node = Utils.parseDumpFile(getClass(), resourcePath);
        context.response()
                .setStatusCode(200)
                .putHeader("content-type", "application/json; charset=utf-8")
                .end(Json.encodePrettily(Utils.convertNode(node)));

    }


    private void version(final RoutingContext context) {
        context.response()
                .setStatusCode(200)
                .putHeader("content-type", "application/json; charset=utf-8")
                .end(Json.encodePrettily("1.0.0"));
    }

    private int getPortNumber() {
        final String port = System.getProperty(PROP_PORT_NUMBER);
        if (Strings.isNullOrEmpty(port)) {
            return DEFAULT_PORT;
        }
        return Integer.parseInt(port);
    }

}
