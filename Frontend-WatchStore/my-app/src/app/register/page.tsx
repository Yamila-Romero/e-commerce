
import RegisterForm from "./register-form";

export default async function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6  rounded-lg ">
        <RegisterForm />
      </div>
    </main>
  );
}
