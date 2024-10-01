import React, { useState } from 'react';

function TweetBox({ postTweet }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      postTweet(content);
      setContent('');
    }
  };

  return (
    <div className="tweet-box">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
