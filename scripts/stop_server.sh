#!/bin/bash

export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Stopping existing node servers
echo "Stopping existing g90 node server"
pm2 stop g90-api