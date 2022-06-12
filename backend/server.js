const connection = require("./config/DbConnections");
const cloudinary = require("cloudinary");
const app = require("./app");
const {registration} = require("./controller/ClientController")
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});
app.post("/",registration)


const server = app.listen(process.env.PORT , () => {
  console.log(`Server is working on port http:localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down the server due to Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
