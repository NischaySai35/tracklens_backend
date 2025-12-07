#!/bin/sh

chmod +x /app/pocketbase

./pocketbase serve --http=0.0.0.0:${PORT:-8080}
