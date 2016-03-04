#!/bin/sh
# Unix shell script for starting tda web project (vertx). If you have big log files
# you might need to adjust Xmx setting.
java -Xmx512m -jar vertx.jar -Dport.number=8080

