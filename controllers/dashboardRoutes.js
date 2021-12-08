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
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (error) {
    res.redirect('login')
  }
});

router.get('/new', withAuth, async (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPK(req.params.id)
    if (postData) {
      const post = postData.get({ plain: true })

      res.render('edit-post', {
        layout: 'dashboard',
        post,
        
      });
    } else{
      res.status(404).end();
    }
  } catch (error) {
    res.redirect('login');
  }
});


module.exports = router;
