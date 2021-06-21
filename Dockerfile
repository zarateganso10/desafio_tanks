FROM node:14-alpine

WORKDIR /home/api 

COPY package.json .

RUN npm install --silent

COPY . .

RUN npm run build
RUN npx typeorm migration:run

CMD npm run start