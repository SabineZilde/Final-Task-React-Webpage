FROM node:alpine

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

COPY . /usr/src/app
RUN npm install

ENTRYPOINT [ "tail", "-f", "/dev/null" ]