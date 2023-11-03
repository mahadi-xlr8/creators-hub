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
  const DB = userData.role === "creator" ? Creator : Brand;
  try {
    const result = await DB.findById(userData.id);
    if (result) {
      socketMap[result._id] = socket.id;
      notification(socket, socketMap, result._id, result.name);
    }
  } catch (err) {
    throw new Error("Invalid user ID!");
  }
  
});

// express
app.use(express.json());
app.use("/brand", brand);
app.use("/creator", creator);
app.use("/isLogin", isLogin);

const port = process.env.PORT || 5000;
httpServer.listen(port, () => console.log(`listening on port ${port}...`));
