#!/bin/bash

ng build
cp dist/* ../easydeepapi.github.io/
cd ../easydeepapi.github.io/
http-server
