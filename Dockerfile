FROM node:16.13
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 4000
ENTRYPOINT node ./server/server.js