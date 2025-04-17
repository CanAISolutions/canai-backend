# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Compile TypeScript to JS
RUN npm run build

# Expose Render default port
EXPOSE 3000

# Run the compiled output
CMD ["npm", "start"]
