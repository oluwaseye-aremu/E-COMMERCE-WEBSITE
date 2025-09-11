#!/bin/bash

# Name of your container
CONTAINER_NAME="ecommerce-site-container"

# 1. Pull the latest image from Docker Hub
echo "Pulling the latest image..."
docker pull oluwaloseye/ecommerce-site:latest

# 2. Stop and remove any old container
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  echo "Stopping old container..."
  docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  echo "Removing old container..."
  docker rm $CONTAINER_NAME
fi

# 3. Run a new container with the latest image
echo "Starting new container..."
docker run -d -p 8080:80 --name $CONTAINER_NAME oluwaloseye/ecommerce-site:latest

echo "✅ Deployment complete! Visit http://localhost:8080"
