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
      name: "Contact",
      link: "/contact",
      icon: "envelope",
    },
    {
      name: "Logout",
      link: "/logout",
      icon: "sign-out-alt",
    },
    {
      name: "Login",
      link: "/login",
      icon: "sign-in-alt",
    },
  ];

  return (
    <>
      <nav className="border-b w-full bg-alpha">
        <ul className="sm:max-w-6xl md:mx-auto text-white flex flex-row-reverse justify-around items-center">
          {menuList.map((item, index) => {
            return <li className="hover:bg-orange-300 py-3 px-5 transition-all duration-300 cursor-pointer border-b-transparent hover:border-b-orange-700 border-b-2 ">{item.name}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};
export default Menubar;
