import React, { useEffect } from 'react';

import axios from 'axios';
import { Mirage } from '../../mirage';

export const BlouseStore = () => {
  /* const [users, setUsers] = useState([]); */

  useEffect(() => {
    axios.get('api/users').then((response) => response.data);
    /* .then((data) => setUsers(data)); */
  }, []);

  Mirage();

  return (
    <>
      <h1>Testing Mirage JS</h1>

      <ul>
        {/* {users?.map((user: any) => (
          <>
            <img
              src={user?.foto?.map((fotos: any) => fotos.src)}
              alt="imagem"
            />
            <div key={user.id}>
              <p>{user?.foto?.map((fotos: any) => fotos.titulo)}</p>

              <p>{user.tecido}</p>
              <p>{user.tamanho}</p>
              <p>{user.preco}</p>
              <p>{user.marca}</p>
              <p>{user.descricao}</p>
            </div>
          </>
        ))} */}
      </ul>
    </>
  );
};
