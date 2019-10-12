FROM node:10

ENV HOME=/app

WORKDIR $HOME

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm i -g pm2

EXPOSE 4000