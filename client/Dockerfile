FROM node:alpine
WORKDIR /app/client
COPY . .
RUN yarn install
EXPOSE 4000
CMD ["yarn", "start"]