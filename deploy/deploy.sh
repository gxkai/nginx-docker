#!/usr/bin/env bash
VOLUME="nginx-docker"
NAME="$1"
PATH="/github/$1"
USER="root"
USERGROUP="root"

echo "Start deployment $1"
cd $PATH
echo "进入$PATH"
echo "pulling source code from"
git reset --hard origin/master
git clean -f
git pull
git checkout master
if [[ ${NAME} = "vue-test" ]]; then
    echo "delete dist"
    rm -rf dist
    echo "build dist"
    npm run build
    cp -r dist /${VOLUME}/frontend
fi
if [[ ${NAME} = "awesome-nest" ]]; then
    echo "delete dist"
    rm -rf dist
    echo "build dist"
    npm run build
    cp -r dist /${VOLUME}/api
    cp pakage.json /${VOLUME}/api
    npm i
    docker exec -it api pm2 reload all
fi


echo "changing permissions..."
chown -R $USER:$USERGROUP $PATH
echo "Finished."