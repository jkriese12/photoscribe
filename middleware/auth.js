const jwt = require("jsonwebtoken");
const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    const isGoogleAuth = token.length > 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
      return next();
    } else if (token && isGoogleAuth) {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
      return next();
    } else {
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
