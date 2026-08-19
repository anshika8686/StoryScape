FROM node:20-bookworm

# Install FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source
COPY . .

# Render will provide PORT
EXPOSE 3000

CMD ["npm", "start"]