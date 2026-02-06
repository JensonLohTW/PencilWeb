#!/bin/bash
set -e

# Ensure we are in the project root
cd "$(dirname "$0")/.."

echo "Running linting and type checking..."
npm run lint
# tsc --noEmit is redundant if using "next lint" with strict mode usually, but explicit check is good
npx tsc --noEmit
