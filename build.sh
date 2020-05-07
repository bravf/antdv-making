#!/bin/bash

npm run build
mv dist /Users/bravf/code/github/bravf.github.io/
cd /Users/bravf/code/github/bravf.github.io/
rm -rf antdv-making
mv dist antdv-making
git add .
git commit -m 'deploy new' *
git push