import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const HomePage = async () => {
  const session = await getServerSession(authOptions);
  console.log("session on home: ", session);

  return (
    <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center">
      <div>Welcome to Home Page</div>
      <div>You are logged in!</div>
    </div>
  );
};
