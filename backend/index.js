const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);
const brand = require("./routes/brand/brand");
const isLogin = require("./routes/isLogin");
const creator = require("./routes/creator/creator");
const socketJwtChecker = require("./middleware/socketJwtChecker");
const notification = require("./sockets/notification");
const notificationRoute = require("./routes/notification");
const commentSocket = require("./sockets/comment");
const commentRoute = require("./routes/getComment");
const review = require("./routes/review");
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

const comment = io.of("/comment");

comment.on("connection", async (socket) => {
  commentSocket(socket, comment);
});

// express
app.use(express.json());
app.use("/brand", brand);
app.use("/creator", creator);
app.use("/isLogin", isLogin);
app.use("/notification", notificationRoute);
app.use("/get-comment", commentRoute);
app.use("/review", review);
const port = process.env.PORT || 5000;
httpServer.listen(port, () => console.log(`listening on port ${port}...`));
