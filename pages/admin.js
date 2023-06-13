import React, { useState } from "react";
import AddInstructor from "../components/addinstructor";
import InstructorList from "../components/instructorlist";
import Assign from "../components/assign";
import PostDetails from "../components/postdetails";
const Sidebar = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const menuItems = [
    { title: "Add instructor", link: "#", component: <AddInstructor /> },
    { title: "Instructor list", link: "#", component: <InstructorList /> },
    { title: "Assign", link: "#", component: <Assign /> },
    { title: "PostDetails", link: "#", component: <PostDetails /> },
  ];

  return (
    <div className="max-w-7xl md:mx-auto ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 bg-green-600 overflow-y-auto">
          <div className="md:py-5 flex flex-col justify-center items-center">
            <ul className="mt-4 text-center w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => toggleTab(index)}
                  className={`tabs w-full text-white text-center cursor-pointer hover:bg-green-500 py-4 font-bold tracking-wider transition-all duration-300
                    ${toggleState === index ? "active-tabs bg-green-500" : ""}
                  `}
                >
                  <span className="text-center">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="content-tabs">{menuItems[toggleState].component}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;