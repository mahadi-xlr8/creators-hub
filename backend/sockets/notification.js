const { Notification } = require("../database");
module.exports = (socket, socketMap, userId, userName) => {
  socket.on("notification", async (data) => {
    const senderProfile = "/creator/" + userId;
    try {
      const prev = await Notification.find({
        jobId: data.jobId,
        sender: userId,
        message: data.message,
      });
      if (prev.length > 0) {
        return;
      }
      const notification = new Notification({
        reciever: data.brand,
        sender: userId,
        senderName: userName,
        senderProfile,
        clickLink: data.clickLink,
        time: data.time,
        message: data.message,
        jobId: data.jobId,
        senderImg: data.profileImg,
      });
      const result = await notification.save();
      const socketId = socketMap[data.brand];
      if (socketId && data.brand != userId) {
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
