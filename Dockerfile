FROM nginx
COPY ./dist/ /usr/local/nginx/html/vueStart/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
