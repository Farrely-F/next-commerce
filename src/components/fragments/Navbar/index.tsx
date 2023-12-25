import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data }: any = useSession();

  return (
    <header>
      <nav className="flex justify-between px-8 lg:px-16 min-h-14 items-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white">
        <Link href={"/"}>Navbar</Link>
        <div className="flex gap-4 items-center">
          {data?.user?.role === "admin" && (
            <Link
              className="group relative hover:animate-pulse"
              href={"/admin"}
            >
              {AdminIcon}{" "}
              <span className="group-hover:visible invisible text-xs bg-white/20 absolute -bottom-1 transition-all right-8 min-w-max p-1 rounded-lg origin-top">
                Admin Dashboard
              </span>
            </Link>
          )}
          <button
            className="border px-4 py-1 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-500 text-sm"
            onClick={() => (data ? signOut() : signIn())}
          >
            {data ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
}

const AdminIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path
      fill="lightgray"
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08"
    />
  </svg>
);
