FROM node:17-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent

COPY . .

RUN npm run build

EXPOSE 4444

CMD ["npm", "run", "serve"]