#!/bin/sh

# Remove any existing node_modules directories
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Install dependencies
/app/bin/npm exec pnpm -- install --frozen-lockfile

# Copy root level dependencies to /app/opt/flatpak-example
mkdir -p /app/opt/flatpak-example/examples/flatpak
cp -r node_modules /app/opt/flatpak-example/
cp -r packages /app/opt/flatpak-example/
cp package.json /app/opt/flatpak-example/
cp pnpm-workspace.yaml /app/opt/flatpak-example/

# Build the app
cd examples/flatpak
/app/bin/npm exec pnpm -- run build

# Copy the app and dependencies to /app/opt/flatpak-example/examples/flatpak
cp -r node_modules /app/opt/flatpak-example/examples/flatpak/
cp -r dist/* /app/opt/flatpak-example/examples/flatpak/
cp package.json /app/opt/flatpak-example/examples/flatpak/

# Copy the icon and desktop file to /app/share
mkdir -p /app/share/applications
mkdir -p /app/share/icons/hicolor/96x96/apps
cp data/com.example.Example.desktop /app/share/applications/
cp data/com.example.Example.png /app/share/icons/hicolor/96x96/apps/

# Create a symlink to the app in /app/bin
echo '#!/bin/sh' > /app/bin/flatpak-example
echo 'exec /app/bin/node /app/opt/flatpak-example/examples/flatpak/index.js' >> /app/bin/flatpak-example
chmod +x /app/bin/flatpak-example
