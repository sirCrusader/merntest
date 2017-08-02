FROM node:6.10.2

RUN mkdir /src

RUN npm install nodemon -g
RUN npm install co
RUN npm install async

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json

EXPOSE 3000

CMD npm start

#npm run watch