import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiFillDashboard, AiOutlineLogin } from "react-icons/ai";
import { FaChalkboardTeacher, FaDiscourse } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const MenuItem = ({ item, isActive }) => {
  return (
    <Link href={item.link}>
      <li
        className={`flex gap-1 items-center py-3 px-8 cursor-pointer border-b-transparent border-b-4 font-medium tracking-wider hover:border-b-green-500 hover:bg-green-800 transition-all duration-300 ${
          isActive ? "border-b-green-500 bg-green-800 shadow-inner" : ""
        }`}
      >
        <span className="text-lg">{item.icon}</span>
        <span>{item.name}</span>
      </li>
    </Link>
  );
};

const Menubar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(getCookie("user") || null);
    setIsLoggedIn(userData !== null);
  }, [getCookie("user")]);

  const menuList = [
    {
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaDiscourse />,
    },
    {
      name: "Instructor",
      link: "/instructor",
      icon: <FaChalkboardTeacher />,
    },
    // {
    //   name: "Dashboard",
    //   link: "/dashboard",
    //   icon: <AiFillDashboard />,
    // },
  ];

  return (
    <nav className="border-b w-full bg-green-600">
      <ul className="sm:max-w-7xl md:mx-auto text-white flex flex-row-reverse justify-around items-center">
        {menuList.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isActive={router.pathname === item.link}
          />
        ))}
        {isLoggedIn ? (
          <MenuItem
            item={{
              name: "Dashboard",
              link: "/dashboard",
              icon: <AiFillDashboard />,
            }}
            isActive={router.pathname === "/dashboard"}
          />
        ) : (
          <MenuItem
            item={{
              name: "Login",
              link: "/login",
              icon: <AiOutlineLogin />,
            }}
            isActive={router.pathname === "/login"}
          />
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
