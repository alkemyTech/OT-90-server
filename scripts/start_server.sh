#!/bin/bash
sudo chmod -R 777 /home/ubuntu/g90-api
#navigate into our working directory where we have all our github files
cd /home/ubuntu/g90-api

# add npm and node to path
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" #loads nvm bash_completion (node is in)

base64 --decode env_encrypted.txt > .env

# Execute docker container for mysql
# docker-compose up -d
echo "waiting for DOCKER MYSQL CONTAINER..."

while ! docker-compose exec rabbitmq /is_ready.sh; do sleep 1; done

echo "Installing npm modeules ..."

# install node modules
npm install

echo "Running server ..."
# run the application
npm run prod