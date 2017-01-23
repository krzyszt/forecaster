FROM node:6.9

RUN npm install --no-progress -g angular-cli

ADD package.json /tmp/package.json

RUN cd /tmp && npm install --no-progress

RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 4200

CMD [ "npm", "start" ]
