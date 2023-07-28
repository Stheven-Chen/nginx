FROM nginx:alpine
COPY site /usr/share/nginx/html
COPY default /etc/nginx/sites-enabled/