FROM node:lts-bullseye

WORKDIR /code

COPY . /code/

RUN yarn install
RUN yarn build
