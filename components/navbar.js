import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="border-b w-full sticky top-0 z-50 px-6">
        <div className="sm:max-w-6xl md:mx-auto py-3 flex justify-between items-center">
          <div className="space-x-4 flex items-center">
            <Link href={"/register"}>
              <img
                className="w-10 rounded-lg"
                src="/image/facebook.webp"
                alt="FB"
              />
            </Link>
            <Link href={"/login"}>
              <img
                className="w-10 rounded-lg"
                src="/image/instagram.webp"
                alt="FB"
              />
            </Link>
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
