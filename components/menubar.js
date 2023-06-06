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
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   icon: "envelope",
    // },
    {
      name: "Instructor",
      link: "/instructor",
      icon: "envelope",
    },
    {
      name: "New answer",
      link: "/fqa",
      icon: "envelope",
    },
    // {
    //   name: "Logout",
    //   link: "/logout",
    //   icon: "sign-out-alt",
    // },
    // {
    //   name: "Login",
    //   link: "/profile",
    //   icon: "sign-in-alt",
    // },
  ];

  return (
    <>
      <nav className="border-b w-full bg-green-500">
        <ul className="sm:max-w-6xl md:mx-auto text-white flex flex-row-reverse justify-around items-center">
          {menuList.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:bg-orange-300 py-3 px-5 transition-all duration-300 cursor-pointer border-b-transparent hover:border-b-orange-700 border-b-2"
              >
                <Link href={item.link}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Menubar;
