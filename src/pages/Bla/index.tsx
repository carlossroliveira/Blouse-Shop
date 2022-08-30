import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
/* import { Mirage } from '../../mirage'; */

export const Bla = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/list/${id}`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, [id]);

  /* Mirage(); */

  console.log(users.map((item: any) => item.name));

  return (
    <>
      <h1>
        {users.map((item: any) => (
          <>
            <p>{item.name}</p>
          </>
        ))}
      </h1>
      {id}
    </>
  );
};
