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

export const RoutesComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <Protected>
              <h2>OLá esse é o profile</h2>
            </Protected>
          }
        />

        <Route path="/login" element={<LoginComponent />} />

        {/* <Route path="*" element={<Signin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
