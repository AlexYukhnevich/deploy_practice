FROM node:latest
WORKDIR /app/projects
COPY . .
RUN yarn install
EXPOSE 3001
CMD ["yarn", "start"]
