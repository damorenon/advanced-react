module.exports = {
  //NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword).
  port: process.env.PORT || 8080,
  host: process.env.HOST || "localhost",
};
