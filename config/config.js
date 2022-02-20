require('dotenv').config();
const {DBUSERNAME, DBPASSWORD,DBDIALECT,DBHOST} = process.env;
module.exports = {
  "development": {
    "username": DBUSERNAME,
    "password": DBPASSWORD,
    "database": "Restaurants_dev",
    "host": DBHOST,
    "dialect": DBDIALECT
  },
  "test": {
    "username": DBUSERNAME,
    "password": DBPASSWORD,
    "database": "Restaurants__test",
    "host": DBHOST,
    "dialect": DBDIALECT
  },
  "production": {
    "username": DBUSERNAME,
    "password": DBPASSWORD,
    "database": "Restaurants_prod",
    "host": DBHOST,
    "dialect": DBDIALECT
  }
}
