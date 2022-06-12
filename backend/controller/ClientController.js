const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const connection = require("../config/DbConnections");
const { REFUSED } = require("dns");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const Connection = require("mysql/lib/Connection");
exports.registration = catchAsyncErrors(async (req, res, next) => {
  //   const mycloud = await cloudinary.v2.uploader.upload(req.body.profilepic, {
  //     folder: "profilepic",
  //     width: 150,
  //     crop: "scale",
  //   });

  let data = null;
  //   `insert into  Buyer (cnic,Buyer_firstname,Buyer_lastname,Buyer_Password,Watchlist,Bought_property) values (${cnic},${firstname},${lastname},${1234567},${watchlist},${boughtproperty});`
  // `insert into Buyer (cnic,Buyer_firstname,Buyer_lastname,Buyer_Password,Watchlist,Bought_property) values (1234567891012,"hammad","aslam",12345678,null,null);`
  const { cnic, firstname, lastname, boughtproperty, watchlist } = req.body;
  console.log(cnic);
  // const Query =
  //   "SET  @cnic=?;@Buyer_firstname=?; @Buyer_lastname=?; @Buyer_Password=?; @Watchlist=?; @Bought_property=?;";
  connection.query(
    `insert into  Buyer (cnic,Buyer_firstname,Buyer_lastname,Buyer_Password,Watchlist,Bought_property) values (${cnic},'${firstname}','${lastname}',${12345678},'${watchlist}','${boughtproperty}');`,

    (err, rows) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY") {
          res.status(401).json({
            success: false,
            message: "its all already existed",
          });
        } else {
          res.status(401).json({
            success: false,
            message: "unexpected error refresh it",
          });
        }
      } else {
        console.log("The data from users table are: \n", rows);
        data = rows;
        res.status(200).json({
          success: true,
          data,
        });
      }
    }
  );
});
exports.getallclient = catchAsyncErrors(async (req, res, next) => {
  let data;
  connection.query("SELECT * from Buyer ", (err, rows) => {
    if (err) throw err;
    data = rows;
    res.status(200).json({
      success: true,
      data,
    });
    console.log("The data from users table are: \n", rows);
  });
});

exports.login = catchAsyncErrors(async (req, res, next) => {
  const { cnic, password } = req.body;
  let data;
  connection.query(
    `select * from Buyer where cnic=${cnic} and Buyer_Password=${password};`,
    (err, row) => {
      data = row;
      console.log(data.length);
      let length = data.length;
      if (!cnic || !password) {
        return next(new ErrorHandler("Please enter password and email", 400));
      }
      if (err) throw err;
      if (length == 1) {
        res.status(200).json({
          success: true,
          row,
          message: "login successfull",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "login failed check email or password",
        });
      }
    }
  );
});
