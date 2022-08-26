// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bla } from '../pages/Bla';
import { Blouses } from '../pages/Blouses';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Error } from '../pages/Error';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Protected } from '../pages/Protected';

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile>
                <Blouses />
              </Profile>
            </Protected>
          }
        />
        <Route path="/profile/list/:id" element={<Bla />} />

        <Route path="/" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
