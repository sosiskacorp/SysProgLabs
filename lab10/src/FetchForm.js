import React, { useState } from 'react';

const FetchForm = () => {
  const [id, setId] = useState('');
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const postData = await postResponse.json();
      setPost(postData);

      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      const userData = await userResponse.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
        />
        <button type="submit">Fetch Data</button>
      </form>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default FetchForm;