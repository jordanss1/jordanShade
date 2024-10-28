# Use the official PHP image with FPM
FROM php:fpm

# Install Nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /var/www/html

# Copy the index.html file to the root
COPY index.html ./

# Copy the lib directory and its contents
COPY libs/ ./libs/

# Make sure the permissions are correct
RUN chown -R www-data:www-data /var/www/html

# Expose the default PHP-FPM port
EXPOSE 9000

# Start both Nginx and PHP-FPM
CMD service nginx start && php-fpm