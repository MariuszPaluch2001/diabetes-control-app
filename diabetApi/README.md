Project setup
==============

Project setup instructions here.

mkdir -p local
cp core/diabetApi/settings/templates/settings.dev.py ./local/settings.dev.py

Deploy info
==============

# AWS ip
http://13.53.183.15

# stop the containers
docker-compose down

# fetch the updated source code
git pull

# rebuild and restart the containers
docker-compose build
docker-compose up -d --force-recreate
