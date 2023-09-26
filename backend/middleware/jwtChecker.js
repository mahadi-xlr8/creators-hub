const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const accessToken = req.headers["access-token"];
  if (!accessToken) res.status(401).send("no access token provided!");
  try {
    const decode = jwt.verify(accessToken, "sexy");
    req.user = decode;
    next();
  } catch (err) {
    return res.status(400).send("invalid access token!");
  }
};
