.PHONY: help dev up down restart logs build prod status clean

help:
	@echo "Perintah Cepat Portfolio Yashif (Docker + WSL):"
	@echo "  make dev      - Jalankan server development (foreground, port 3000)"
	@echo "  make up       - Jalankan server di background (detached, port 3000)"
	@echo "  make down     - Hentikan dan bersihkan container"
	@echo "  make restart  - Restart container dev"
	@echo "  make logs     - Pantau log live container"
	@echo "  make build    - Rebuild image docker development"
	@echo "  make prod     - Build dan preview image produksi (port 3001)"
	@echo "  make status   - Cek status container aktif"
	@echo "  make clean    - Hentikan container dan bersihkan cache Docker yang tidak terpakai"

dev:
	docker compose up

up:
	docker compose up -d
	@echo "✅ Server aktif di http://localhost:3000"

down:
	docker compose down

restart:
	docker compose restart app

logs:
	docker compose logs -f app

build:
	docker compose build --no-cache app

prod:
	docker compose --profile prod up --build prod-preview

status:
	docker ps --filter "name=yashif-portfolio"

clean:
	docker compose down -v --remove-orphans
	docker system prune -f
