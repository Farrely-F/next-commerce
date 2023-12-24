import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data } = useSession();

  return (
    <header>
      <nav className="flex justify-between px-8 lg:px-16 min-h-14 items-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white">
        <Link href={"/"}>Navbar</Link>
        <button
          className="border px-6 py-1 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-500"
          onClick={() => (data ? signOut() : signIn())}
        >
          {data ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
}
