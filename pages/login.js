import React from "react";
import { signIn } from "next-auth/react";

// hooks
import useTitle from "@/hooks/useTitle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// component
import { Icon } from "@iconify/react";
import Loader from "@/components/Loader";

function Login() {
  useTitle("Login");
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (session?.user?.email) {
    router.push("/dashboard");
  }

  return (
    <>
      <div className="grid grid-cols-12 h-[100vh] w-[100vw]">
        <div className="col-span-0 hidden md:col-span-6 md:flex flex-row items-center justify-center bg-black">
          <h1 className="text-7xl text-white">Board.</h1>
        </div>
        <div className="p-4 md:p-8 col-span-12 flex md:col-span-6 flex-col justify-center h-[100%] md:px-28 bg-[#F5F5F5] max-xl:px-60">
          <h2 className="text-4xl font-bold">Sign In</h2>
          <p className="mb-2 mt-1 md:mb-5 md:mt-2 ">Sign in to your account</p>
          <div className="grid grid-cols-12 gap-2 md:gap-6">
            <button
              className="col-span-12 md:col-span-6 rounded-md md:rounded-xl bg-white p-2 text-gray-500 hover:text-gray-700 transition-colors flex gap-2 items-center px-4 md:px-8"
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
            >
              <Icon icon="logos:google-icon" />
              Sign in with Google
            </button>
            <button
              className="col-span-12 md:col-span-6 rounded-md md:rounded-xl bg-white p-2 text-gray-500 hover:text-gray-700 transition-colors flex gap-2 items-center  px-4 md:px-8"
              onClick={() => signOut()}
            >
              <Icon icon="fa:apple" />
              Sign in with Apple
            </button>

            <form className="col-span-12 rounded-md md:rounded-xl bg-white p-4 md:p-8">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-900 text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-[#F5F5F5] border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-start mb-6">
                <a
                  href="#"
                  className="font-normal text-base text-[#346bd5] hover:text-[rgba(53,109,212,0.95)] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center hover:bg-gray-800"
              >
                Submit
              </button>
            </form>

            <p className="col-span-12 text-center">
              Don’t have an account?{" "}
              <a
                href="#"
                className="font-normal text-base text-[#346bd5] hover:text-[rgba(53,109,212,0.95)] hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
