#!/bin/bash

# Replace YOUR_USERNAME with your GitHub username
echo "# Personal Website" >> README.md
git add README.md
git commit -m "Add README"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
