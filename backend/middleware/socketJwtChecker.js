const jwt = require("jsonwebtoken");
const { Creator, Brand } = require("../database");
module.exports = async (socket, next) => {
  const accessToken = socket.handshake.auth.token;
  if (!accessToken) return next(new Error("no access token provided!"));
  try {
    const decode = jwt.verify(accessToken, "sexy");
    const userData = decode;
    const DB = userData.role === "creator" ? Creator : Brand;

    const result = await DB.findById(userData.id);
    if (result) {
      userData.name=result.name;
      socket.user = userData;
      next();
    } else return next(new Error("invalid user Id!"));
  } catch (err) {
    return next(new Error("invalid access token!"));
  }
};
