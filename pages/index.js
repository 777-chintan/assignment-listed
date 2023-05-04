import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
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
  } else {
    router.push("/login");
  }

  return null;
}
