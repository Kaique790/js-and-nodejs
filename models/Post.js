const db = require('./db.js');

const Post = db.sequelize.define('posts', {
    user: {
        type: db.Sequelize.STRING
    },
    subject: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
});

// Post.sync({ force: true });
module.exports = Post