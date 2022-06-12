// module.exports = {
//   checkToken: (req, res, next) => {
//     let token = req.get("authorization");
//     if (token) {
//       // Remove Bearer from string
//       token = token.slice(7);
//       jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
//         if (err) {
//           return res.json({
//             success: 0,
//             message: "Invalid Token...",
//           });
//         } else {
//           req.decoded = decoded;
//           next();
//         }
//       });
//     } else {
//       return res.json({
//         success: 0,
//         message: "Access Denied! Unauthorized User",
//       });
//     }
//   },
// };
const sendToken = (req, res, next) => {
  let token = req.get("authorization");
  if (token) {
    // Remove Bearer from string
    token = token.slice(7);
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Invalid Token...",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: 0,
      message: "Access Denied! Unauthorized User",
    });
  }
};

// const sendToken = (user, statusCode, res) => {
//   const token = user.getJWTToken();

//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     token,
//   });
// };

module.exports = sendToken;
