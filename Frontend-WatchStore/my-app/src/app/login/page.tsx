import Image from "next/image";
import LoginForm from "./login-form";

export default async function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">

      <div className="w-1/2 h-full  flex items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
