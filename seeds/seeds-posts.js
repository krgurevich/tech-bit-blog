const { Post } = require('../models');

const postData = [
    {
        post_title: "Pro Schedus is Going Live Soon!",
        post_content: "Download and plan your day with this latest app.  Pro Schedus is a digital daily planner that will simplify and organize your day.  Stay tuned for more details.",
        user_id: 1
    },
    {
        post_title: "Are you an avid traveler?",
        post_content: "When planning a road trip, one key factor that we all should take into consideration is weather.  With Weather Pal app, be always prepared in the event of an inclement weather. Add cities as you go, and the Weather Pal will provide you with an hourly and daily forecast through your road trip.",
        user_id: 2
    },
    {
        post_title: "What is Sequelize? ",
        post_content: "Sequelize is a promise-based ORM for Node.js.  It has multiple features, which are very easy to implement and use, with queries written in plain JavaScript.",
        user_id: 3

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;