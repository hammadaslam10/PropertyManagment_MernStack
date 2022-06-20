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
const sellid = require("../utils/apiFeatures");
exports.sellerregistration = catchAsyncErrors(async (req, res, next) => {
  const {
    cnic,
    Seller_firstname,
    Seller_lastname,
    Seller_email,
    Sold_property,
    Seller_password,
    Owned_property,
    Available,
  } = req.body;
  if (Available == true || !Available) {
    Available = 1;
  } else {
    Available = 0;
  }
  connection.query(
    `insert into Seller (cnic,Selling_id,Seller_firstname,Seller_lastname,Seller_email,Sold_property,Seller_password,Owned_property,Available) values (${cnic},${sellid},'${Seller_firstname}','${Seller_lastname}','${Seller_email}',${Seller_password},'${Sold_property}','${Owned_property}',${Available})`,
    (err, row) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY") {
          res.status(401).json({
            sucesss: true,
            message: "its all already existed",
          });
        } else {
          row = JSON.parse(JSON.stringify(row));
          res.status(200).json({
            success: true,
            row,
          });
        }
      }
    }
  );
});
exports.allseller = catchAsyncErrors(async (req, res, next) => {
  connection.query(`select * from Seller`, (err, rows) => {
    if (err) throw err;
    rows = JSON.parse(JSON.stringify(rows));
    res.status(200).json({
      success: true,
      rows,
    });
  });
});
exports.sellerlogin = catchAsyncErrors(async (req, res, next) => {
  const { sellerid, password } = req.body;
  connection.query(
    `select * from Seller where Selling_id=${sellerid} and Seller_password=${password};`,
    (err, row) => {
      if (err) throw err;
      row = JSON.parse(JSON.stringify(row));
      console.log(row.length);
      if (!sellerid || !password) {
        return next(new ErrorHandler("Please enter password and cnic", 400));
      }
      if (length == 1) {
        sendToken(row, 200, res);
      } else {
        res.status(401).json({
          success: false,
          message: "login failed check email or password",
        });
      }
    }
  );
});
exports.sellerprofile = catchAsyncErrors(async (req, res, next) => {
  if (req.cookies.token != null) {
    const id = await jwt.decode(req.cookies.token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    connection.query(`${id.id}`, (err, row) => {
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
    });
  } else {
    res.status(400).json({
      success: false,
      message: "access invalid",
    });
  }
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
exports.sellerproperty = catchAsyncErrors(async (req, res, next) => {
  connection.query("", (err, row) => {
    row = JSON.parse(JSON.stringify(row));
    res.status(200).json({
      success: true,
      row,
    });
  });
});
exports.insertpoperty = catchAsyncErrors(async (req, res, next) => {
  const { property_id } = req.body;
  connection.query(`insert into `, (err, row) => {
    if (err) throw err;
    row = JSON.parse(JSON.stringify(row));
    res.status(200).json({
      success: true,
      data,
    });
  });
});
exports.editproperty = catchAsyncErrors(async (req, res, next) => {
  connection.query(``);
});
exports.deletepoperty = catchAsyncErrors(async (req, res, next) => {});
exports.allproperty = catchAsyncErrors(async (req, res, next) => {
  connection.query("select * from Property where ", (err, row) => {
    row = JSON.parse(JSON.stringify(row));
    res.status(200).json({
      success: true,
      row,
    });
  });
});
exports.allpropertyofsameseller = catchAsyncErrors(async (req, res, next) => {
  const { Seller_id } = req.body;
  connection.query(`select * from  property = ${Seller_id}`, (err, row) => {
    row = JSON.parse(JSON.stringify(row));
    res.status(200).json({
      success: true,
      row,
    });
  });
});
exports.propertydisplay = catchAsyncErrors(async (req, res, next) => {
  let data;
  connection.query(
    `select property.Property_id,concat(seller.seller_firstname,' ',seller.seller_lastname)as Full_name,Bed,price,bath from property,property_detail,Seller;`,
    (err, row) => {
      if (err) throw err;
      data = JSON.parse(JSON.stringify(row));
      res.status(200).json({
        success: true,
        data,
      });
    }
  );
});
exports.SellerList = catchAsyncErrors(async (req, res, next) => {
  let data;
  connection.query(`select cnic,Selling_id,concat(Seller_firstname,' ',Seller_lastname) as Full_name,Sold_property,Owned_property,Available,Seller_email from Seller;`, (err, row) => {
    if (err) throw err;
    data = JSON.parse(JSON.stringify(row));
    res.status(200).json({
      success: true,
      data,
    });
  });
});
