const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: "RealEstate",
});


module.exports = connection;
/***
 * 
 * -- Create database RealEstate;
use RealEstate;
-- drop dataBASE RealEstate; 
select * from Buyer;
create table Buyer(
cnic char(13) NOT NULL  primary key unique ,
Buyer_firstname varchar(45) not null,
Buyer_lastname varchar(45) not null,
Buyer_Password char(8), 
Watchlist blob ,
Bought_property blob
);
-- check(like "%@%")
create table Seller(
cnic char(13)  primary key  ,
Selling_id CHAR(8)  unique  not null,
Seller_firstname VARCHAR(45) not null, 
Seller_lastname VARCHAR(45) not null,
Seller_email VARCHAR(45)  , 
Seller_password CHAR(8) not null,
Sold_property blob ,
Owned_property blob 
);
create table Property(
Property_id CHAR(8) primary Key  ,
Owner_id char(8),
pictures blob
);
create table Property_detail(
Property_id CHAR(8),
Property_Type blob,
Bed INT,
Price INT,
Bath INT,
Description VARCHAR(255),
City VARCHAR(25),
Address VARCHAR(255),
foreign key (Property_id) REFERENCES Property(Property_id)
);
create table Property_review(
Property_id CHAR(8) not null,
Buyer_id char(13) not null,
Seller_id char(8) not null,
Rating char(1),
user_comment varchar(255),
Comment_timing datetime,
foreign key (Property_id) REFERENCES Property(Property_id),
foreign key (Buyer_id) REFERENCES Buyer(cnic),
foreign key (Seller_id) REFERENCES Seller(Selling_id)

);
create table Transactions(
Order_id char(10) primary key,
Buyer_name varchar(45),
Seller_name varchar(45),
Property_id char(10),
Price Int,
Date_of_Transactions  datetime
);
create table admin_table(
admin_id char(8) primary key ,
admin_password char(8)
);
 */