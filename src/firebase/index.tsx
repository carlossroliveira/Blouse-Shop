// -------------------------------------------------
// Firebase
// -------------------------------------------------
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ENV_API_KEY,
  authDomain: process.env.REACT_APP_ENV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ENV_PROJECT_ID,
};

export const provider = new GoogleAuthProvider();

export const githubProvider = new GithubAuthProvider();

const app = initializeApp(firebaseConfig);

export const authFireBase = getAuth(app);
