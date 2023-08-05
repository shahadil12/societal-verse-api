const config = require("../config")[process.env.NODE_ENV];
const pgp = require("pg-promise")({});
const pgpdb = pgp(config);

pgpdb
  .connect()
  .then((obj) => {
    console.log(obj.client.serverVersion);
    obj.done();
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = pgpdb;
