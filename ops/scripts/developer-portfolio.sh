#!/usr/bin/env bash
set -euo pipefail

export ECR_REGISTRY=public.ecr.aws/u8u9n1r7
export ECR_REPOSITORY=developer-portfolio
export DOMAIN_NAME=masonak.dev
export LETSENCRYPT_EMAIL=me@masonak.dev

cd $HOME/developer-portfolio

docker compose up -d
