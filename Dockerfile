FROM node:6.10.2

RUN mkdir /src

RUN npm install nodemon -g
RUN npm install webpack -g

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json

ADD app/webpack.config.js /src/webpack.config.js

EXPOSE 3000

CMD npm run dev-hook-all

#npm run watch