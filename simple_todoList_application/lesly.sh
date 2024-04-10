#!/bin/bash

# Docker login
docker login

# Build Docker image
sudo docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest cchancee/todolist_web_application:latest

# Push Docker image to Docker Hub
sudo docker push cchancee/todolist_web_application:latest

# Pull Docker image from Docker Hub
docker pull cchancee/todolist_web_application:latest

# Run Docker container with pulled image
docker run -p 8080:8080 cchancee/todolist_web_application:latest
