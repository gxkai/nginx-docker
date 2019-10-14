#!/usr/bin/env bash

cd $1
git reset --hard origin/master
git clean -f
git pull
git checkout master
if [[ ${NAME} = "vue-site" ]]; then
    cnpm i
    npm run build
    dokcer exec -it html nginx -s reload
fi
if [[ ${NAME} = "awesome-nest" ]]; then
    cnpm i
    npm run build
    dokcer exec -it api pm2 reload
fi