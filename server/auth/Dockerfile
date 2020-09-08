FROM node:alpine
WORKDIR /app/server/auth
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]