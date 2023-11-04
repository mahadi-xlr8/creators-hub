const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);
const brand = require("./routes/brand/brand");
const isLogin = require("./routes/isLogin");
const creator = require("./routes/creator/creator");
const socketJwtChecker = require("./middleware/socketJwtChecker");
const { Creator, Brand } = require("./database");
const notification = require("./sockets/notification");
const notificationRoute = require("./routes/notification");
if (!process.env.facebookAppSecret) {
  console.log("facebook app secret is not set!");
  process.exit(1);
}

// sockets

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
let socketMap = {};
io.use(socketJwtChecker);

io.on("connection", async (socket) => {
  const userData = socket.user;
  socketMap[userData.id] = socket.id;
  notification(socket, socketMap, userData.id, userData.name);

  socket.on("disconnect", () => {
    for (let i in socketMap) {
      if (socketMap[i] == socket.id) {
        socketMap[i] = undefined;
      }
    }
  });
});

// express
app.use(express.json());
app.use("/brand", brand);
app.use("/creator", creator);
app.use("/isLogin", isLogin);
app.use("/notification", notificationRoute);

const port = process.env.PORT || 5000;
httpServer.listen(port, () => console.log(`listening on port ${port}...`));
