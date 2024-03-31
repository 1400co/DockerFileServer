# Etapa de construcción
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Etapa de ejecución
FROM node:14-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"] // Cambiado de index.js a server.js
