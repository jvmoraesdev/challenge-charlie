# Build stage
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install --silent
COPY . ./

EXPOSE 4200

ENTRYPOINT [ "npm", "run", "start" ]