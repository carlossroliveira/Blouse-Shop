import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* import axios from 'axios'; */

export const Bla = () => {
  /* const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/carlossroliveira/repos')
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []); */

  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post: any) => (
          <>
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.marca}</Link>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
