#!/usr/bin/env bash

cd $1
git reset --hard origin/master
git clean -f
git pull
git checkout master
if [[ $1 == "vue-site" ]]; then
    cnpm i
    npm run build
    cp -r dist ../html
    dokcer exec -it html nginx -s reload
fi
if [[ $1 == "awesome-nest" ]]; then
    cnpm i
    npm run build
    dokcer exec -it api pm2 reload
fi