FROM node:alpine
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
EXPOSE 4001
CMD ["yarn", "start"]