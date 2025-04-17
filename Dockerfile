# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy app files
COPY . .

# Install deps
RUN npm install

# Compile TypeScript (if needed)
RUN npm run build || true

# Expose port
EXPOSE 3001

# Start server
CMD ["npx", "ts-node", "server.ts"]

