# Use official NGINX image
FROM nginx:latest

# Copy static site files into NGINX default path
COPY ./public /usr/share/nginx/html

# Expose port 80
EXPOSE 80
