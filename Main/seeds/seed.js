const { Comment } = require('../models');

const commentData = [
    {
        comment_text:" Lorem Ipsum Lorem Ipsum.",
        user_id: 10,
        post_id: 1
    },
    {
        comment_text:" Coding is awesome.",
        user_id: 11,
        post_id: 2
    },
    {
        comment_text:" Lorem Ipsum Lorem Ipsum.",
        user_id: 12,
        post_id: 3
    },
    {
        comment_text:" Lorem Ipsum Lorem Ipsum.",
        user_id: 13,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;