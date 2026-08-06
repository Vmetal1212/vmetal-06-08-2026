#!/bin/bash
set -e

echo "Deployment started..."
# 
# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."
npm install --yes

echo "I am in " 
pwd

echo "Building the project"
npm run build

echo "Deleting pm2..."
pm2 delete "v-metals"

echo "Saving pm2..."
pm2 save

echo "Creating new pm2..."
pm2 start ecosystem.config.js

echo "Saving pm2..."
pm2 save


# tmp
echo "Deployment Finished!"