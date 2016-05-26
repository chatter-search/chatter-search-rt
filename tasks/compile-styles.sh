#!/usr/bin/env bash

mkdir -p ./build

node-sass ./src/styles/index.scss \
| postcss -c ./postcss-options.json \
> ./build/index.css
