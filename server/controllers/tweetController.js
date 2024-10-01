const Tweet = require('../models/Tweet');

exports.createTweet = async (req, res) => {
  const { content } = req.body;
  const tweet = new Tweet({ content, author: req.user._id });
  await tweet.save();
  res.status(201).json(tweet);
};

exports.getTweets = async (req, res) => {
  const tweets = await Tweet.find().populate('author');
  res.json(tweets);
};

