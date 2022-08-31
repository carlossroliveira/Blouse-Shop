import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Bla = () => {
  const { data } = useFetch<any>('http://localhost:5000/posts');

  console.log(data);

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
