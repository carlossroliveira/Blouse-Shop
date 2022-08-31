import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export const Blouses = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('api/users')
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Testing Mirage JS</h1>

      <ul>
        {users?.map((user: any) => (
          <>
            <Link to={`/profile/list/${user.id}`}>
              <img
                src={user?.foto?.map((fotos: any) => fotos.src)}
                alt="imagem"
              />
            </Link>

            {/* <div key={user.id}>
              <p>{user?.foto?.map((fotos: any) => fotos.titulo)}</p>

              <p>{user.tecido}</p>
              <p>{user.tamanho}</p>
              <p>{user.preco}</p>
              <p>{user.marca}</p>
              <p>{user.descricao}</p>
            </div> */}
          </>
        ))}
      </ul>
    </>
  );
};
