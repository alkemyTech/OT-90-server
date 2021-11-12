#!/bin/bash
sudo chmod -R 777 /home/ubuntu/g90-api
#navigate into our working directory where we have all our github files
cd /home/ubuntu/g90-api

# add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" #loads nvm bash_completion (node is in)

# install node modules
npm install

# run the application
npm run prod