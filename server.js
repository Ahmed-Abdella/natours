const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const app = require('./app');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

// const testTour = new Tour({
//   name: 'the forest hiker',
//   rating: 4.7,
//   price: 500,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERRoRRRR:', err);
//   });

const port = process.env.port;

app.listen(port, () => {
  console.log(`App runnung in port ${port}`);
});
// =============================================================== some practise on javaScript
// =================================================================================================
// =====================================================================================================

// const Person = function (firstName, job) {
//   this.firstName = firstName;
//   this.job = job;
// };
// const ahmed = new Person('Ahmed', 'developer');
// console.log(ahmed);
