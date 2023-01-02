const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) 
    .then((data) => {
      console.log(`Mongodb connected with server`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
