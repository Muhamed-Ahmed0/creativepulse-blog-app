# Use the official Node.js image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
