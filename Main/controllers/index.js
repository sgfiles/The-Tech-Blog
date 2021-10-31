const router = require('express').Router();

const postRoutes = require('./post');
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/', homeRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
