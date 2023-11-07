const { Comment } = require("../database");
module.exports = (socket, comment_namespace) => {
  socket.on("comment", async (data) => {
    const senderProfile = "/creator/" + data.senderId;
    try {
      const comment = new Comment({
        senderName: data.senderName,
        senderProfile,
        time: data.time,
        comment: data.comment,
        jobId: data.jobId,
        senderImg: data.senderImg,
        isBrand: data.isBrand,
      });
      const result = await comment.save();
      comment_namespace.emit("newComment", result);
    } catch (err) {
      return new Error(err.message);
    }
  });
};
