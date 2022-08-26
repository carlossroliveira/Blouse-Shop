// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, FormEvent, useEffect, useState } from 'react';
// -------------------------------------------------
// Firebase
// -------------------------------------------------
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authFireBase, githubProvider, provider } from '../../firebase';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IAuthProvider, IContext, IUser } from './types';
// -------------------------------------------------
// Util
// -------------------------------------------------
import { getUserLocalStorage, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider): JSX.Element => {
  const [userFirebase, setUserFirebase] = useState<IUser | null | string>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUserFirebase(user);
    }
  }, []);

  const loginEmail = (e: FormEvent, email: string, password: string) => {
    e.preventDefault();

    signInWithEmailAndPassword(authFireBase, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;

        setUserFirebase(user);
        setUserLocalStorage(user as IUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        console.log('Senha2');
      });
  };

  const loginGithub = (): void => {
    signInWithPopup(authFireBase, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const email = result.user.email;
        const payload = { token: token, email };

        setUserFirebase(payload);
        setUserLocalStorage(payload);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const loginGoogle = async () => {
    await signInWithPopup(authFireBase, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const email = result?.user.email;
        const payload = { token: token, email };

        setUserFirebase(payload);
        setUserLocalStorage(payload);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const logout = (): void => {
    setUserFirebase(null);
    setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        loginEmail,
        loginGithub,
        loginGoogle,
        disconnected: !!userFirebase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
