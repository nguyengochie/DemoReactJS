import React, { useEffect, useState } from 'react';

const DemoCallAPI = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      });
  }, []);
  console.log('posts', posts);
  return (
    <div style={{ padding: 20, textAlign: 'start' }}>
      <ul>
        {posts?.map((item) => {
          return <li key={item.id}>{item?.title}</li>;
        })}
      </ul>z
    </div>
  );
};

export default DemoCallAPI;
