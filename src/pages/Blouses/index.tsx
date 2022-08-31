// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';

export const Blouses = () => {
  const { data } = useFetch<any>('http://localhost:5000/posts');

  return (
    <>
      <ul>
        {data?.map((post: any) => (
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
