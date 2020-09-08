FROM node:alpine as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
