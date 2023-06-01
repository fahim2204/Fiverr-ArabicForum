import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(useSession());

  return (
    <>
      <nav className="border-b w-full sticky top-0 z-50 px-6">
        <div className="sm:max-w-6xl md:mx-auto py-3 flex justify-between items-center">
          <div className="space-x-4 flex items-center">
            {!session && (
              <>
                <Link href={"/register"}>
                  <img className="w-10 rounded-lg" src="/image/facebook.webp" alt="FB" />
                </Link>
                <Link href={"/login"}>
                  <img className="w-10 rounded-lg" src="/image/instagram.webp" alt="FB" />
                </Link>
              </>
            )}
            {session && (
              <>
                <Link
                  href={"/profile"}
                  className="border border-lime-500 rounded-sm py-1 px-3 text-lime-500 hover:bg-lime-500 hover:text-white transition duration-300"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="border border-sky-500 rounded-sm py-2 px-2 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                >
                  <FiLogOut />
                </button>
              </>
            )}
          </div>
          <h6 className="text-2xl font-bold drop-shadow-lg hover:scale-110 hover:drop-shadow-2xl transition duration-1000">
            <Link href={"/"}>Treasure Of Islam</Link>
          </h6>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
