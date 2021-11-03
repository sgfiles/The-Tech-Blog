const router = require('express').Router();
const path = require('path')
const { Comment} = require('../../models')
const withAuth = require('../../utils/auth')

// router.get('/', (req,res) => {
//     Comment.findAll()
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

router.post('/', withAuth, (req, res) => {
    Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })

    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });

});

// if (req.session) {
//     Comment.create({
//         comment_text: req.body.comment_text,
//         post_id: req.body.post_id,
//         user_id: req.session.user_id,
//     })
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//     })
// }

// To Do
// router.put
// router.delete


module.exports = router;