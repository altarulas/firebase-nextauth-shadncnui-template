"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export const Login = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={() => signIn()}>Google Login</Button>
      <Button variant="secondary" onClick={() => signOut()}>
        Google Logout
      </Button>
    </div>
  );
};
