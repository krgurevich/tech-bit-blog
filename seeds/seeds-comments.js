const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: "I will download this app as soon as it becomes available.",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text:
      "Great suggestion! We love to plan road trips, and this app will be extremely useful for us!",
  },
  {
    user_id: 4,
    post_id: 2,
    comment_text:
      "I love all your articles! And we will definitely consider it.",
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "It worked really well with my latest project!",
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "Interesting!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
