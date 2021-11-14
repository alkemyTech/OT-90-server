#!/bin/bash
sudo chmod -R 777 /home/ubuntu/g90-api-2
#navigate into our working directory where we have all our github files
cd /home/ubuntu/g90-api-2

base64 --decode env_encrypted.txt > .env

# Execute docker container for mysql
# docker-compose up -d
echo "waiting for DOCKER MYSQL CONTAINER..."

# while ! docker-compose exec rabbitmq /is_ready.sh; do sleep 1; done

echo "Installing npm modeules ..."

# install node modules
npm install

echo "Running server ..."
# run the application
npm run prod