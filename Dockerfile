FROM nginx
COPY ./dist/ /usr/share/nginx/html/vueStart/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
