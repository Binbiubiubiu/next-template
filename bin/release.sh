#!/usr/bin/env sh

npm run release -- --prerelease
git push origin master --tags
npm run github-release


