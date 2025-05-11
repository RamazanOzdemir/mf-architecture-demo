#!/bin/bash

# Ask for fragment name
read -p "🧩 Enter fragment name: " fragment_name

# Ask for Module Federation scope
read -p "🏷️  Enter Module Federation scope (e.g., dashboard): " scope_name

# Ask for dev port
read -p "🔌 Enter development port (e.g., 3001): " dev_port

# Template folder
TEMPLATE_DIR="fragment-boilerplate"

# Target folder
TARGET_DIR="$fragment_name"

# Check if folder already exists
if [ -d "$TARGET_DIR" ]; then
  echo "❌ Error: '$TARGET_DIR' already exists."
  exit 1
fi

# Copy boilerplate to new folder
cp -r "$TEMPLATE_DIR" "$TARGET_DIR"

echo "📦 Creating fragment '$fragment_name'..."

# Replace placeholders in all files
find "$TARGET_DIR" -type f -exec perl -pi -e "s/fragment-boilerplate/$fragment_name/g; s/fragment_scope/$scope_name/g; s/FRAGMENT_PORT/$dev_port/g;" {} +




# Done
echo "✅ Fragment '$fragment_name' created successfully!"
echo "📦 Package name: $fragment_name"
echo "🌐 Federation scope: $scope_name"
echo "🚀 Dev port: $dev_port"
