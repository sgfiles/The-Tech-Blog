const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth.js');



router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      }
    })
    const posts = postData.map((post) => post.get({plain: true}))
    res.render('all-post-admin', {
      layout: 'dashboard',
      posts

    })
  } catch (error) {
    res.redirect('login')
  }
})

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  })
})

router.get('edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPK(req.params.id)
    if (postData) {
      const post = postData.get({ plain: true })
      res.render('edit-post', {
        layout: 'dashboard',
        post
        
      }) 
    } else{
      res.status(404).end()
    }
  } catch (error) {
    res.redirect('login')
  }
})

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
