# QR-Code-Generator
QR Code Generator built in HTML, CSS &amp; JavaScript

🐳 Run with Docker (Recommended)

1️⃣ Build the Docker Image
docker build -t qrcode-generator .
2️⃣ Run the Docker Container
docker run -p 8080:80 qrcode-generator
3️⃣ Open in Browser
🚀 Open http://localhost:8080
🏗️ Dockerfile Breakdown

# Use Nginx as the base image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy project files to Nginx web directory
COPY . .

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
🛑 Stopping & Cleaning Docker Containers

To stop the container:
docker ps    # Get container ID
docker stop <container_id>
To remove all stopped containers:
docker system prune -f
📜 License

This project is licensed under the MIT License. Feel free to use and modify it.
💡 Contact

📧 Email: your.email@example.com
🐦 Twitter: @yourhandle
💼 LinkedIn: Your Name
🚀 Enjoy Coding & Have Fun! 🎉
