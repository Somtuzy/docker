FROM node:21-alpine

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install -g nodemon; fi

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm start; fi"]