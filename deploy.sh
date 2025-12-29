#!/usr/bin/env bash
set -e

BRANCH_DEPLOY="deploy"

# 1) build
npm ci
npm run build

# 2) dist-i temporary folderə kopyala
TMP_DIR="$(mktemp -d)"
cp -R dist/* "$TMP_DIR/"
touch "$TMP_DIR/.nojekyll"

# 3) deploy branch-ı ayrı qovluğa checkout elə
DEPLOY_DIR="$(mktemp -d)"
git worktree add "$DEPLOY_DIR" "$BRANCH_DEPLOY" 2>/dev/null || {
  git fetch origin "$BRANCH_DEPLOY":"$BRANCH_DEPLOY" || true
  git worktree add "$DEPLOY_DIR" "$BRANCH_DEPLOY"
}

# 4) deploy qovluğunu təmizlə və dist-i yerləşdir
rm -rf "$DEPLOY_DIR"/*
cp -R "$TMP_DIR"/* "$DEPLOY_DIR"/

# 5) commit + push
cd "$DEPLOY_DIR"
git add -A
git commit -m "Deploy dist $(date '+%Y-%m-%d %H:%M')" || echo "No changes"
git push origin "$BRANCH_DEPLOY"

# 6) cleanup
cd - >/dev/null
git worktree remove "$DEPLOY_DIR" --force
rm -rf "$TMP_DIR"