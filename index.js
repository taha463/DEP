const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize socket.io on the server

// Serve the static HTML file
app.use(express.static(__dirname + "/public"));

// Handle socket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for chat messages from the client
  socket.on("chat message", (msg) => {
    // Broadcast the message to all clients
    io.emit("chat message", msg);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});