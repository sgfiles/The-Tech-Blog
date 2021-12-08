const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../utils/auth.js');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [User],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});
// single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          includes: [User],
        },
      ],
    });
    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    }else {
      res.status(404).end();
    }
  }catch (err) {
      res.status(500).json(err);
    } 
  });
  
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;