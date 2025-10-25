FROM node:lts

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local wait-for-it script and make it executable
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Copy Prisma schema and app code
COPY prisma ./prisma
COPY . .

# Copy and set permissions for entrypoint script
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Set a dummy DATABASE_URL for prisma generate
ARG DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma client during build
RUN npx prisma generate

# Optional: Fix permissions
RUN chown -R node:node /app/node_modules && chmod -R 775 /app/node_modules

EXPOSE 3000

# Use entrypoint script to start the app
CMD ["/bin/sh", "/app/entrypoint.sh"]
