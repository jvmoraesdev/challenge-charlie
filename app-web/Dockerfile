# Build stage
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./
RUN npm install --silent
COPY . ./

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "dev" ]

