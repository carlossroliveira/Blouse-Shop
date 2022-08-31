// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';

export const Blouses = () => {
  const { data } = useFetch<IBProps[]>('http://localhost:5000/posts');

  return (
    <>
      <ul>
        {data?.map((post: IBProps) => (
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
