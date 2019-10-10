FROM node:10


#WORKDIR /app
#
#COPY package.json ./
#RUN cnpm i -g pm2
#RUN cnpm install
#
#COPY . .


ENV HOME=/app

COPY package.json $HOME/

WORKDIR $HOME

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm i -g pm2
RUN cnpm install

COPY ./dist $HOME/

EXPOSE 4000