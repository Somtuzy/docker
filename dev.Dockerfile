FROM node:21-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]