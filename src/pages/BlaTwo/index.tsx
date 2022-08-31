import React, { useState } from 'react';
/* import { useParams } from 'react-router-dom'; */
/* 
import axios from 'axios'; */

export const BlaTwo = () => {
  /*  const { id } = useParams();
  const [users, setUsers] = useState([] as any);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/carlossroliveira/repos/${id}`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, [id]); */

  /*   const { id } = useParams(); */
  const [post, setPost] = useState({} as any);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/posts/`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  console.log(post);

  return (
    <>
      <h2 className="cartao__titulo">{post.marca}</h2>
      <h2 className="cartao__titulo">{post.descricao}</h2>
    </>
  );
};
