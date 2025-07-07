# Makefile for px-website-2025

# Load environment variables from .env.docker when running docker commands
include .env.docker

# Development Commands
rd: # Run dev
	pnpm dev

rp: # Run payload
	pnpm payload

b: # Build
	pnpm build

s: # Start
	pnpm start

l: # Lint
	pnpm lint

lf: # Lint fix
	pnpm lint:fix

# Docker Commands
dd: # Docker dev
	pnpm docker:dev

db: # Docker build
	pnpm docker:build

ds: # Docker stop
	pnpm docker:down

dr: # Docker restart (stop and start)
	pnpm docker:down && pnpm docker:dev

dps: # Docker ps (check status)
	docker-compose ps

dl: # Docker logs
	docker-compose logs -f

# Storybook Commands
sb: # Storybook
	pnpm storybook

sbd: # Storybook in Docker
	docker-compose run --service-ports storybook

sbb: # Storybook build
	pnpm build-storybook

# Git Commands
g: # Git commit with commitizen
	pnpm git

# Type Generation
gt: # Generate types
	pnpm generate:types

gm: # Generate importmap
	pnpm generate:importmap

# Utility Commands
i: # Install dependencies
	pnpm install

ri: # Reinstall dependencies
	pnpm reinstall

ii: # Incremental install
	pnpm ii

# Database Commands
mdb: # MongoDB shell in Docker
	docker-compose exec mongo mongosh px-website-2025

mdbp: # MongoDB import data
	docker-compose exec -T mongo mongorestore --db px-website-2025 /dump/px-website-2025

# Help Command
help:
	@echo "Available commands:"
	@echo ""
	@grep '^[a-zA-Z0-9-]*:.*#' Makefile | sort | cut -d ':' -f 1,2 | sed 's/: #/ -/' | sed 's/^/  /'

.PHONY: rd rp b s l lf dd db ds dr dps dl sb sbd sbb g gt gm i ri ii mdb mdbp help 