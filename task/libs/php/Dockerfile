FROM php:8.2-fpm

RUN useradd --create-home app

USER root

COPY . /var/www/html

RUN mkdir -p /var/www/html && chown app:app -R /var/www/html

RUN chmod -R 755 /var/www/html

USER app


