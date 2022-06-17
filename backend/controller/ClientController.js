// const retirevetoken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
// const cloudinary = require("cloudinary");
// const { REFUSED } = require("dns");
// const { hashSync, genSaltSync, compareSync } = require("bcrypt");
// const Connection = require("mysql/lib/Connection");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const jwt = require("jsonwebtoken");
const connection = require("../config/DbConnections");

exports.registration = catchAsyncErrors(async (req, res, next) => {
  const { cnic, firstname, lastname, boughtproperty, watchlist, password } =
    req.body;
  console.log(cnic);
  connection.query(
    `insert into  Buyer (cnic,Buyer_firstname,Buyer_lastname,Buyer_Password,Watchlist,Bought_property) values (${cnic},'${firstname}','${lastname}',${password},'${watchlist}','${boughtproperty}');`,

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
        rows = JSON.parse(JSON.stringify(rows));
        res.status(200).json({
          success: true,
          rows,
        });
      }
    }
  );
});
exports.getallclient = catchAsyncErrors(async (req, res, next) => {
  let data;
  connection.query("SELECT * from Buyer ", (err, rows) => {
    if (err) throw err;

    data = JSON.parse(JSON.stringify(rows));
    res.status(200).json({
      success: true,
      data,
    });
    console.log("The data from users table are: \n", data);
  });
});

exports.login = catchAsyncErrors(async (req, res, next) => {
  const { cnic, password } = req.body;
  connection.query(
    `select * from Buyer where cnic=${cnic} and Buyer_Password=${password};`,
    (err, row) => {
      if (err) throw err;
      let data = JSON.parse(JSON.stringify(row));
      data = row;
      console.log(data.length);
      let length = data.length;
      if (!cnic || !password) {
        return next(new ErrorHandler("Please enter password and cnic", 400));
      }
      if (length == 1) {
        sendToken(data, 200, res);
      } else {
        res.status(401).json({
          success: false,
          message: "login failed check email or password",
        });
      }
    }
  );
});
exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
exports.BuyerProfile = catchAsyncErrors(async (req, res, next) => {
  if (req.cookies.token != null) {
    const id = await jwt.decode(req.cookies.token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    console.log(id);

    connection.query(
      `select * from Buyer where cnic = ${id.id}`,
      (err, row) => {
        if (err) {
          res.status(501).json({
            success: false,
            message: "access invalid ",
          });
        } else {
          row = JSON.parse(JSON.stringify(row));
          res.status(200).json({
            sucess: true,
            row,
          });
        }
      }
    );
  } else {
    res.status(400).json({
      success: false,
      message: "access invalid ",
    });
  }
});
