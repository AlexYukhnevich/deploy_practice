FROM node:alpine
WORKDIR /app/server/projects
COPY . .
RUN yarn install
EXPOSE 3001
CMD ["yarn", "start"]
