"use client";

import { firebaseApp } from "@/lib/firebase";
import { Button } from "../ui/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const HomePage = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  const socialLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log("token: ", token);
        console.log("user: ", user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <div className="w-full h-screen overflow-auto flex justify-center items-center">
      <Button onClick={socialLogin}>Google Login</Button>
    </div>
  );
};
