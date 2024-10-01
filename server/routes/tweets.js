const express = require('express');
const { createTweet, getTweets } = require('../controllers/tweetController');
const router = express.Router();

router.post('/', createTweet);
router.get('/', getTweets);

module.exports = router;

