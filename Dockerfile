# Use Node.js as the base image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./mouse-tracker/package*.json ./

# Install dependencies
RUN npm install

# Copy all files from your local project directory to the container working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lighter server base image for the production build
FROM nginx:alpine
# FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
