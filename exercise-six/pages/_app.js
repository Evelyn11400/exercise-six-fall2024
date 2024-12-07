import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import { initializeApp } from "firebase/app";
import "../globals.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-six-fall2024.firebaseapp.com",
  projectId: "exercise-six-fall2024",
  storageBucket: "exercise-six-fall2024.firebasestorage.app",
  messagingSenderId: "1029096848901",
  appId: "1:1029096848901:web:965bf0ce423fa7b999a66c",
};
export default function App({ Component, pageProps }) {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [error, setError] = useState(null);

  const createUserFunction = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          setUserInformation(user);
          setError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    },
    [setError, setIsLoggedIn, setUserInformation]
  );

  const loginUserFunction = useCallback((e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoggedIn(true);
        setUserInformation(user);
        setError(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  });

  const logoutUserFunction = useCallback(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation(null);
        setIsLoggedIn(false);
      })
      .catch(
        (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        },
        [setError, setIsLoggedIn, setUserInformation, signOut]
      );
  });

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation(null);
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  if (isLoading) return null;

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} logoutUserFunction={logoutUserFunction} />
      <Component
        {...pageProps}
        createUserFunction={createUserFunction}
        isLoggedIn={isLoggedIn}
        loginUserFunction={loginUserFunction}
        userInformation={userInformation}
      />
      <p>{error}</p>
    </div>
  );
}
