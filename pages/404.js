import useTitle from "@/hooks/useTitle";
import Link from "next/link";
import { useRouter } from "next/router";

function Page404() {
  useTitle("404 Page Not Found");
  const router = useRouter();

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[480px] m-auto min-h-screen flex justify-center flex-col text-center items-center">
        <h3 className="font-bold text-3xl my-2">Sorry, page not found!</h3>
        <p className="font-normal text-gray-400 my-2">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>

        <div className="h-[260px] mx-auto ">
          <img src={"/images/error.jpeg"} className="h-full object-contain" />
        </div>
        <Link to={"/"}>
          <button className="no-underline	bg-black rounded-lg px-4 py-2 mt-2 text-white hover:text-gray-300 hover:bg-gray-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
