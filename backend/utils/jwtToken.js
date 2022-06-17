const jwt = require("jsonwebtoken");
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });
function getJWTToken(cnic) {
  return jwt.sign({ id: cnic }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}
// const getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

//   userSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//   };

//   userSchema.methods.getResetPasswordToken = function () {
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     this.resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");

//     this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
//     return resetToken;
//   };
const retirevetoken = (token) => {
  const id = jwt.decode(token, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  return id;
};
module.exports = retirevetoken;
const sendToken = (user, statusCode, res) => {
  const token = getJWTToken(user[0].cnic);

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
// let jwtSecretKey = process.env.JWT_SECRET;
//     let data = {
//         time: Date(),
//         userId: 12,
//     }

//     const token = jwt.sign(data, jwtSecretKey);

//     res.send(token);
