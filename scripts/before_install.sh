#!/bin/bash

# download node and npm
nvm use 14

# create our working directory if it does not exist
DIR="/home/ubuntu/g90-api"
if [ -d "$DIR" ]; then
  echo "${DIR} exists."
else
  echo "Creating ${DIR} directory..."
  mkdir ${DIR}
fi