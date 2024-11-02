FROM nginx:latest


USER root

RUN useradd --create-home app


RUN mkdir -p /var/www/html && chown app:app -R /var/www/html
RUN mkdir -p /var/cache && chown app:app -R /var/cache
RUN touch /var/run/nginx.pid && chown app:app -R /var/run/nginx.pid

COPY . /var/www/html


RUN chmod -R 755 /var/www/html && chmod -R 755 /var/cache && chmod -R 755 /var/run/nginx.pid

USER app

