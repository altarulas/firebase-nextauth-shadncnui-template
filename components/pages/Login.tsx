import { Login } from "../login";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("session on login: ", session);

  return (
    <div className="w-full h-screen overflow-auto flex justify-center items-center">
      <Login />
    </div>
  );
};
