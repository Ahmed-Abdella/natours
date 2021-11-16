const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.port;

const app = require('./app');
app.listen(port, () => {
  console.log(`App runnung in port ${port}`);
});
// =============================================================== some practise on javaScript
// =================================================================================================
// =====================================================================================================

const Person = function (firstName, job) {
  this.firstName = firstName;
  this.job = job;
};
const ahmed = new Person('Ahmed', 'developer');
console.log(ahmed);
