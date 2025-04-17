# Use Node with optional build tools
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Expose the server port
EXPOSE 3001

# Use tsx to run TypeScript without building
CMD ["npx", "tsx", "server.ts"]
