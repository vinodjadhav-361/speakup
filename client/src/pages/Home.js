import React, { useState, useEffect } from 'react';
import TweetBox from '../components/TweetBox';

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from the backend
    fetch('/api/tweets')
      .then(res => res.json())
      .then(data => setTweets(data));
  }, []);

  const postTweet = (content) => {
    // Post new tweet
    fetch('/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    .then(res => res.json())
    .then(tweet => setTweets([tweet, ...tweets]));
  };

  return (
    <div className="home">
      <TweetBox postTweet={postTweet} />
      <div className="tweet-list">
        {tweets.map(tweet => (
          <div key={tweet._id} className="tweet">{tweet.content}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;

