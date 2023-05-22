# base image
FROM node:16-alpine


WORKDIR /app

COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 5555

CMD ["npm","start"]