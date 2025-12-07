#!/bin/sh

chmod +x /app/pocketbase

cd /app
./pocketbase serve --http=0.0.0.0:${PORT:-8080}
