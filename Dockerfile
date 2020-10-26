FROM node:12

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENV PORT=3000

CMD ["npm", "start"]