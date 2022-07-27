// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Protected } from '../components/Protected';
import { LoginComponent } from '../components/LoginComponent';
import { Profile } from '../pages/Profile';

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />

        <Route path="/" element={<LoginComponent />} />

        {/* <Route path="*" element={<Signin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
