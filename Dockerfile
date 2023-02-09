FROM node:14.17.1 as build
WORKDIR /tmp
COPY . .
RUN yarn
RUN yarn build
# nginx部署
FROM nginx:1.12.2
WORKDIR /usr/share/nginx/html/dingding-h5/
RUN rm -f *
COPY --from=build /tmp/docs .
COPY --from=build /tmp/default.conf /etc/nginx/conf.d/default.conf