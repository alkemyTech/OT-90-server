#!/bin/bash
sudo chmod -R 777 /home/ubuntu/g90-api-2
cd /home/ubuntu/g90-api-2
# add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

# install node modules
npm install
npm run prod