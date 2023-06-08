// import React, { useState } from "react";
// import Link from "next/link";
// import Fqa2 from "../pages/instructor";
// import AddInstructor from "../pages/addinstructor";
// const Sidebar = () => {
//   const [toggleState, setToggleState] = useState(0);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   const menuItems = [
//     { title: "Dashboard", link: "/dashboard" },
//     { title: "Add instructor", link: "#", component: <AddInstructor /> },
//     { title: "Item 2", link: "#", component: <Fqa2 /> },
//     { title: "Item 3", link: "#" },
//     { title: "Item 4", link: "#" },
//     { title: "Item 5", link: "#" },
//   ];

//   return (
//     <div className="grid grid-cols-12">
//       <div className="col-span-12 md:col-span-3 bg-green-400 max-w-7xl overflow-y-auto">
//         <div className="md:py-5 flex flex-col justify-center items-center">
//           <ul className="mt-4">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => toggleTab(index)}
//                 className={
//                   toggleState === index
//                     ? "tabs active-tabs text-white hover:text-orange-500 p-2 hover:bg-white font-bold tracking-wider transition-all duration-300"
//                     : "tabs text-white hover:text-orange-500 p-2 hover:bg-white font-bold tracking-wider transition-all duration-300 "
//                 }
//               >
//                 <Link href={item.link}>
//                   <span className="text-center">{item.title}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="col-span-12 md:col-span-9">
//         <div className="content-tabs">
//           {menuItems[toggleState].component}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import Link from "next/link";
import Fqa2 from "../pages/instructor";
import AddInstructor from "../pages/addinstructor";

const Sidebar = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const menuItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Add instructor", link: "#", component: <AddInstructor /> },
    { title: "Item 2", link: "#", component: <Fqa2 /> },
    { title: "Item 3", link: "#" },
    { title: "Item 4", link: "#" },
    { title: "Item 5", link: "#" },
  ];

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 bg-green-400 max-w-xs md:max-w-sm overflow-y-auto">
        <div className="md:py-5 flex flex-col justify-center items-center">
          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => toggleTab(index)}
                className={
                  toggleState === index
                    ? "tabs active-tabs text-white hover:text-orange-500 p-2 hover:bg-white font-bold tracking-wider transition-all duration-300"
                    : "tabs text-white hover:text-orange-500 p-2 hover:bg-white font-bold tracking-wider transition-all duration-300 "
                }
              >
                <Link href={item.link}>
                  <span className="text-center">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="content-tabs">
          {menuItems[toggleState].component}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
