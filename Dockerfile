FROM alpine:3.19

WORKDIR /app

# Install libc compatibility
RUN apk add --no-cache libc6-compat

# Copy pocketbase binary + pb_data folder
COPY pocketbase /app/pocketbase
COPY pb_migrations /app/pb_migrations
COPY pb_data /app/pb_data

# Expose Render port
ENV PORT=10000

# Run PB
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:10000"]
