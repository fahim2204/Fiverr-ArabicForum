import React, { useEffect, useState } from "react";
import AddInstructor from "../components/addinstructor";
import InstructorList from "../components/instructorlist";
import Assign from "../components/assign";
import PostDetails from "../components/postdetails";
import PendingQuestion from "../components/pendingQuestion";
import AnsweredQuestion from "../components/answeredQuestion";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const [isInstructor, setIsInstructor] = useState(true);
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const redirectToLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const userData = JSON.parse(getCookie("user") || null);
    userData
      ? setIsInstructor(userData?.type === "instructor")
      : redirectToLogin();
  }, []);

  const doLogout = () => {
    deleteCookie("user");
    redirectToLogin();
  };

  const adminItems = [
    { title: "Add instructor", link: "#", component: <AddInstructor /> },
    { title: "Instructor list", link: "#", component: <InstructorList /> },
    { title: "Assign Video", link: "#", component: <Assign /> },
    { title: "Question Details", link: "#", component: <PostDetails /> },
  ];
  const instructorItems = [
    { title: "Pending Question", link: "#", component: <PendingQuestion /> },
    { title: "Answered Question", link: "#", component: <AnsweredQuestion /> },
  ];
  const renderItem = isInstructor ? instructorItems : adminItems;

  return (
    <div className="max-w-7xl md:mx-auto ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 bg-green-600 overflow-y-auto">
          <div className="md:py-5 flex flex-col justify-center items-center">
            <ul className="flex flex-col mt-4 text-center w-full h-[400px]">
              {renderItem.map((item, index) => (
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
              <li
                onClick={doLogout}
                className={`mt-auto tabs w-full text-white text-center cursor-pointer hover:bg-green-500 py-4 font-bold tracking-wider transition-all duration-300`}
              >
                <span className="text-center">Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="content-tabs">
            {renderItem[toggleState].component}
          </div>
        </div>
      </div>
    </div>
  );
};
