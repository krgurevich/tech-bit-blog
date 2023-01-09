const { User } = require("../models");

const userData = [
  {
    name: "Mack Gordon",
    email: "mackgordon@gmail.com",
    password: "password1@",
  },
  {
    name: "Janet Sylvester",
    email: "janet.sylvester@yahoo.com",
    password: "password2@",
  },
  {
    username: "Peter Francis",
    email: "peter_francis@myemail.com",
    password: "password4@",
  },
  {
    username: "Leah Smith",
    email: "user@dewittech.com",
    password: "password4@",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
