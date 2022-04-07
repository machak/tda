#!/bin/sh
# Unix shell script for starting tda. If you have big log files
# you might need to adjust Xmx setting.
java -Dsun.java2d.uiScale=200% -Xmx512m -jar tda.jar
