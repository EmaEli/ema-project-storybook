#!/bin/bash

FILES=$(git diff --name-only HEAD)

if echo "$FILES" | grep -qi "atoms"; then
  LEVEL="ATOMS"
elif echo "$FILES" | grep -qi "molecules"; then
  LEVEL="MOLECULES"
elif echo "$FILES" | grep -qi "organisms"; then
  LEVEL="ORGANISMS"
elif echo "$FILES" | grep -qi "templates"; then
  LEVEL="TEMPLATES"
elif echo "$FILES" | grep -qi "pages"; then
  LEVEL="PAGES"
else
  LEVEL="CHORE"
fi

COMPONENT=$(echo "$FILES" | head -1 | awk -F'/' '{print $(NF-1)}')
MESSAGE="$LEVEL: Add $COMPONENT"

echo "Commit message: $MESSAGE"
read -p "Confirm? (y/n) " CONFIRM

if [ "$CONFIRM" = "n" ]; then
  read -p "Edit commit message: " -e -i "$MESSAGE" MESSAGE
fi

git add .
git commit -m "$MESSAGE"
git push