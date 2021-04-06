FROM node:15.13-alpine3.13 as build

# Add bash for just running
# some build scripts
RUN apk update && \
    apk add --no-cache bash

# Add any args or env here
ENV GENERATE_SOURCEMAP=false

WORKDIR /app

# Scripts
COPY ./package*.json .
COPY ./babel.config.js .

# Always heavy so why not cache it before src
RUN npm install

# Translations
COPY ./scripts ./scripts

# Source
#
# Public first as it's less likely to be changed
COPY ./public ./public
COPY ./src ./src

# Build
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# This line solved my issue
RUN rm /etc/nginx/conf.d/default.conf

COPY ./conf/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
