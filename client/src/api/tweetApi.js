export const getTweets = async () => {
    const response = await fetch('/api/tweets');
    return response.json();
  };
  
  export const postTweet = async (content) => {
    const response = await fetch('/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    return response.json();
  };
  
