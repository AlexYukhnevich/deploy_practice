FROM node:alpine as build-stage
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
