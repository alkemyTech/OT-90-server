#!/bin/bash

# download node and npm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# . ~/.nvm/nvm.sh
# install node v14
# nvm install v14

# create our working directory if it does not exist
DIR="/home/ubuntu/g90-api-2"
if [ -d "$DIR" ]
then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi

# apply migrations
# npx sequelize-cli db:migrate
# apply seeds
# npx sequelize-cli db:seed:all