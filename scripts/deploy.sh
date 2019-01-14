#!/bin/bash
set -x

gatsby build --prefix-paths

rsync -r --delete-after --quiet --exclude=/.ssh --exclude=/icon $TRAVIS_BUILD_DIR/public/ ci.tpsie@tpsie.com:~/