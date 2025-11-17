FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install cross-spawn@7.0.5 || npm install
COPY . .

EXPOSE 80
CMD ["npm", "start"]
