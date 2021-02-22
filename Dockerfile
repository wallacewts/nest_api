FROM node:15.9.0-alpine3.10

WORKDIR /home/api

CMD yarn start:docker:dev
