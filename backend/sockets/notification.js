module.exports = (socket, socketMap, userId, userName) => {
  socket.on("interested-notification", (data) => {
    const socketId = socketMap[data.brand];
    if (socketId) {
      socket.to(socketId).emit("receive-notification", {
        ...data,
        userId,
        userName,
        message: "has interested on your job post.",
      });
    }
  });
};
