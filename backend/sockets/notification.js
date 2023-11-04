const { Notification } = require("../database");
module.exports = (socket, socketMap, userId, userName) => {
  socket.on("interested-notification", async (data) => {
    const senderProfile = "/creator/" + userId;
    try {
      const notification = new Notification({
        reciever: data.brand,
        sender: userId,
        senderName: userName,
        senderProfile,
        clickLink: data.clickLink,
        time: data.time,
        message: "is interested on your job post.",
        jobId: data.jobId,
        senderImg: data.profileImg,
      });
      const result = await notification.save();
      const socketId = socketMap[data.brand];
      if (socketId) {
        socket.to(socketId).emit("receive-notification", result);
      }
    } catch (err) {
      return new Error(err.message);
    }
  });

  socket.on("remove-interested", async ({ jobId, brandId }) => {
    try {
      const result = await Notification.findOneAndDelete({
        jobId,
        sender: userId,
      });
      const socketId = socketMap[brandId];
      if (socketId) {
        socket
          .to(socketId)
          .emit("remove-interest", { notificationId: result._id });
      }
    } catch (err) {
      return new Error(err.message);
    }
  });
};
