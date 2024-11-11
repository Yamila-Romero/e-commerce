"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
    const handleClick = () => {
      signIn("google");
    };

    return (
      <button
        onClick={handleClick}
        className="w-full flex items-center font-semibold justify-center h-10 px-6 mt-4 text-base transition-colors duration-300 bg-blue-500 border-2 border-white text-white rounded-lg focus:shadow-outline hover:bg-slate-200 "
      >
        {/* <Image src={googleLogo} alt="Google Logo" width={20} height={20} /> */}
        <span className="ml-4">Continue with Google</span>
      </button>
    );
  }