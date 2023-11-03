const jwt = require("jsonwebtoken");

module.exports = (socket, next) => {
  const accessToken = socket.handshake.auth.token;
  if (!accessToken) return next(new Error("no access token provided!"));
  try {
    const decode = jwt.verify(accessToken, "sexy");
    socket.user = decode;
    next();
  } catch (err) {
    return next(new Error("invalid access token!"));
  }
};
