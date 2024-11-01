FROM nginx:alpine

WORKDIR /app

COPY . .

RUN addgroup app && adduser -S -G app app

RUN mkdir -p /var/cache/nginx && mkdir -p /var/run/ 

RUN chown -R app:app /var/cache/nginx && chown -R app:app /var/run/

RUN chown -R app:app .

COPY ./default.conf /etc/nginx/conf.d

USER app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

