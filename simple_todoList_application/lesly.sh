#!/bin/bash

# Docker login
docker login

sudo docker build -t vite-react-app:latest .

# Run Docker container 

# Tag Docker image
docker tag vite-react-app:latest cchancee/todolist_web_application:latest

# Push Docker image to Docker Hub
sudo docker push cchancee/todolist_web_application:latest

# Pull Docker image from Docker Hub
docker pull cchancee/todolist_web_application:latest
docker run -p 8080:8080 cchancee/todolist_web_application:latest
