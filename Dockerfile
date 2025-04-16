# Use official Node.js image as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose API port (Render default)
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]
