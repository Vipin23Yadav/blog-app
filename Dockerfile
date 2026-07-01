# Use Node.js 18 as base image
FROM node:18-alpine


# Set working directory inside container
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
