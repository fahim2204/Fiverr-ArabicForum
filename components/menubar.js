import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const Menubar = () => {
  const { data: session } = useSession();
  console.log(useSession());

  const menuList = [
    {
      name: "Home",
      link: "/",
      icon: "home",
    },
    {
      name: "About",
      link: "/about",
      icon: "info",
    },
        {
      name: "Admin",
      link: "/admin",
      icon: "envelope",
    },
    {
      name: "Instructor",
      link: "/instructor",
      icon: "envelope",
    },
  ];

  return (
    <>
      <nav className="border-b w-full bg-green-600">
        <ul className="sm:max-w-7xl md:mx-auto text-white flex flex-row-reverse justify-around items-center">
          {menuList.map((item, index) => {
            return (
              <Link href={item.link}>
              <li
                key={index}
                className="hover:bg-green-400 py-3 px-5 transition-all duration-300 cursor-pointer border-b-transparent hover:border-b-gray-700 border-b-2"
              >
                  <span>{item.name}</span>
              </li>
                </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Menubar;
