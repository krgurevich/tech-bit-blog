const { User, Post, Comment } = require("../models");

const sequelize = require("../config/connection");

const postData = require("./postData.json");
const commentData = require("./commentData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
