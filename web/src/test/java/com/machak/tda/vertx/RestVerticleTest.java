

package com.machak.tda.vertx;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import io.vertx.core.Vertx;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;

@RunWith(VertxUnitRunner.class)
public class RestVerticleTest {

    private static final Logger log = LogManager.getLogger(RestVerticleTest.class);
    public static final int TEST_PORT = 8282;
    private Vertx vertx;

    @Before
    public void setUp(TestContext context) {
        vertx = Vertx.vertx();
        System.setProperty(RestVerticle.PROP_PORT_NUMBER, String.valueOf(TEST_PORT));
        vertx.deployVerticle(RestVerticle.class.getName(), context.asyncAssertSuccess());
    }

    @After
    public void tearDown(TestContext context) {
        vertx.close(context.asyncAssertSuccess());
    }


    @Test
    public void testResolving(TestContext context) {
        log.info("TEST RESOLVING");
        final Async async = context.async();
        vertx.createHttpClient().getNow(TEST_PORT, "localhost", "/",
                response -> response.handler(body -> {
                    context.assertTrue(body.toString().contains("TDA"));
                    async.complete();
                }));
    }
}