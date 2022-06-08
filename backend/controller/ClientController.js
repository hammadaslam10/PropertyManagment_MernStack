const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const connection = require("../config/DbConnections");
const { REFUSED } = require("dns");

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

  connection.query(
    
  `insert into  Buyer (cnic,Buyer_firstname,Buyer_lastname,Buyer_Password,Watchlist,Bought_property) values (${cnic},${firstname},${lastname},${12345678},${watchlist},${boughtproperty});`,

    (err, rows) => {
      if (err) throw err;
      console.log("The data from users table are: \n", rows);
      data = rows;
      res.status(200).json({
        success: true,
        data,
      });
    }
  );
});

// sendToken(user,201,res)
