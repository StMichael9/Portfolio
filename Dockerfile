FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY my-react-app/package*.json ./my-react-app/
COPY backend/package*.json ./backend/

# Copy source code
COPY . .

# Install dependencies and build frontend
RUN cd my-react-app && npm install && npm run build

# Install backend dependencies
RUN cd backend && npm install

# Expose the port
EXPOSE 3001

# Start the server
CMD ["node", "backend/server.js"]
