# Dockerfile

FROM php:8.2.12-apache

WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath soap

# Enable Apache modules and set up Laravel
RUN a2enmod rewrite
COPY . /var/www/html

# Create storage directory and set proper permissions
RUN mkdir -p storage && \
    chown -R www-data:www-data /var/www/html/storage
    
COPY vhost.conf /etc/apache2/sites-available/000-default.conf