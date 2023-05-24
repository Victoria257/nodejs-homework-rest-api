const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;
// додаємо на хостинг в Environment key: DB_HOST , value -значення без кавичок

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
