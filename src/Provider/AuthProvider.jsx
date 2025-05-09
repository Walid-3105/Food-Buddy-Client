import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const Provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://assignment-11-server-beta-bay.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((data) => {
            // console.log("LogIn Token", data.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://assignment-11-server-beta-bay.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log("logOut token", res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    userLogin,
    createUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    updateEmail,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
