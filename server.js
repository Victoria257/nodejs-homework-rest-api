const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Vika:sATf1Rn6mwez5dm8@cluster0.jbm8q9s.mongodb.net/db-contacts?retryWrites=true&w=majority";

// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
