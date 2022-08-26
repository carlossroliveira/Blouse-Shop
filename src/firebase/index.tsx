// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
// -------------------------------------------------
// Firebase
// -------------------------------------------------
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD3Bom7nwuCnw2JPQtYE96AOLR1njQHOCw',
  authDomain: 'testing-ebcd0.firebaseapp.com',
  projectId: 'testing-ebcd0',
  storageBucket: 'testing-ebcd0.appspot.com',
  messagingSenderId: '39028439000',
  appId: '1:39028439000:web:4f97b5acbb82f1f0a6a4ad',
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const githubProvider = new GithubAuthProvider();

export const authFireBase = getAuth(app);

export const Firebase = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const gooogle = () => {
    signInWithPopup(authFireBase, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user, 'Popup');
        console.log(token, 'Popup');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const EmailESenha = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(authFireBase, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'Senha');
        setEmail('');
        setSenha('');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const githubb = () => {
    signInWithPopup(authFireBase, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
        console.log(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <pre>{JSON.stringify(email)}</pre>

      <form onSubmit={EmailESenha}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button>Form</button>
      </form>

      <button onClick={gooogle}>Google</button>
      <button onClick={githubb}>GitHub</button>
    </>
  );
};
