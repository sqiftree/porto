#!/bin/bash
# Helper script to manage Yashif Portfolio Docker environment in WSL

set -e

case "$1" in
  start|up)
    echo "🚀 Starting Yashif Portfolio development server with Docker..."
    docker compose up
    ;;
  detached|-d)
    echo "🚀 Starting Yashif Portfolio in detached mode..."
    docker compose up -d
    echo "✅ Running at http://localhost:3000"
    ;;
  build)
    echo "🔨 Rebuilding Docker development container..."
    docker compose build --no-cache app
    ;;
  down|stop)
    echo "🛑 Stopping containers..."
    docker compose down
    ;;
  prod)
    echo "📦 Building and previewing production container..."
    docker compose --profile prod up --build prod-preview
    ;;
  logs)
    docker compose logs -f app
    ;;
  *)
    echo "Usage: ./dev.sh [up|detached|build|stop|prod|logs]"
    echo "  up       - Start development server (hot reload active)"
    echo "  detached - Start container in background"
    echo "  build    - Rebuild Docker image without cache"
    echo "  stop     - Stop running containers"
    echo "  prod     - Build & test standalone production build"
    echo "  logs     - Stream container logs"
    ;;
esac
