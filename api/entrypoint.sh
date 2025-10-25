#!/bin/sh
set -e  # Exit on error

# Wait for Postgres to be available
./wait-for-it.sh db:5432 --timeout=30 --strict -- echo "✅ Postgres is up"

# Run Prisma migrations (generate already done at build)
npx prisma migrate deploy

# Start the app
npm run dev