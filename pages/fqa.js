import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";
import Link from "next/link";

const contents = [
  {
    id: "1",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "2",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "3",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "4",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "5",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },

  {
    id: "6",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "7",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "8",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "9",
    url: "/fqa",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
];

const topics = [
  { id: "1", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "2", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "3", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "4", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "5", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "6", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "7", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
  { id: "8", url: "/fqa", ques: "What Is the Purpose of Hajj?" },
];

const Fqa = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="max-w-7xl m-auto">
        <div className="grid md:grid-cols-12 gap-5 py-5 max-h-full">

          <div className="col-span-12 md:col-span-8 bg-pink-50 border-t-4 border-green-700 rounded p-4">
            <div className=" font-bold text-xl text-green-700 p-2">
              <span className="justify-center text-center items-center m-auto flex">
                <BiBookmarkAlt className="text-3xl" />
                New Answer
              </span>
            </div>

            <div className="space-y-2">
              {contents.map((item, index) => {
                return (
                  <div key={index} className="space-y-2">
                    <Link href={item.url} className=" ">
                      <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-700 p-4 shadow-md border-b border-gray-400 justify-between flex">
                        <span className="flex font-bold space-x-1 md:space-x-3">
                          <BsBookmark className="text-xl" />
                          <span className="text-sm">{item.ques}</span>
                        </span>
                        <div className="text-sm font-semibold">{item.time}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-gray-50 p-4 rounded">
            <div className=" font-bold text-xl text-green-700 ">
              <h2 className="text-center py-3">
                Selected Articles On Hajj
              </h2>
            </div>

            <div className="space-y-4">
              {topics.map((item, index) => {
                return (
                  <div key={index} className="space-y-3">
                    <Link href={item.url} className=" ">
                      <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-700 p-4 shadow-md border-b border-gray-400 justify-between flex">
                        <span className="flex font-bold  space-x-3">
                          <BsBookmark className="text-xl" />
                          <span className="text-sm">{item.ques}</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-8">
            <div className="bg-pink-50 p-2 border-t-2 border-green-500">
                <div className=" font-bold text-xl text-green-700 p-2">
                <span className="justify-center text-center items-center m-auto flex">
                    <BiBookmarkAlt className="text-3xl" />
                    Important Topics
                </span>
                </div>
            </div>
            <div className="py-2 grid md:grid-cols-4 gap-3">
                <div className="md:grid-cols-1 hover:scale-110 bg-orange-50 p-16">
                    <div className="justify-center text-center items-center m-auto ">
                        <span className="text-center text-xl font-bold">Types of Ritual</span>
                    </div>
                </div>
                <div className="md:grid-cols-1 hover:scale-105 bg-green-50 p-16">
                <div className="justify-center text-center items-center m-auto ">
                        <span className="text-center text-xl font-bold">Types of Ritual</span>
                    </div>
                </div>
                <div className="md:grid-cols-1 hover:scale-105 bg-orange-50 p-16">
                <div className="justify-center text-center items-center m-auto ">
                        <span className="text-center text-xl font-bold">Types of Ritual</span>
                    </div>
                </div>
                <div className="md:grid-cols-1 hover:scale-105 bg-green-50 p-16">
                <div className="justify-center text-center items-center m-auto ">
                        <span className="text-center text-xl font-bold">Types of Ritual</span>
                    </div>
                </div>
            </div>
        </div>

        {/* //****** tab */}
        <div className="">
          <div className=" m-auto flex justify-center items-center text-center p-10">
            <button
              className={
                toggleState === 1
                  ? "tabs active-tabs bg-green-50 p-4 px-20 border-t-2 border-l border-r border-green-600"
                  : "tabs  bg-pink-50 p-4 px-20 border-b-2 border-green-600"
              }
              onClick={() => toggleTab(1)}>
              Marriage
            </button>
            <button
              className={
                toggleState === 2
                  ? "tabs active-tabs  bg-green-50 mx-2 p-4 px-20 border-t-2 border-l border-r border-green-600"
                  : "tabs bg-pink-50 p-4 px-20 mx-2 border-b-2 border-green-600"
              }
              onClick={() => toggleTab(2)}>
              Calling Non Muslim to Islam
            </button>
            <button
              className={
                toggleState === 3
                  ? "tabs active-tabs  bg-green-50 p-4 px-20 border-t-2 border-l border-r border-green-600"
                  : "tabs bg-pink-50 p-4 px-20  border-b-2 border-green-600"
              }
              onClick={() => toggleTab(3)}>
              Sound Belief
            </button>
          </div>

          
            <div className="content-tabs">
              {/*//todo *************** Tab01--start************* */}
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }>
               
                
                <div className="grid lg:grid-cols-12 gap-5 pb-6 bg-gray-200 p-4">
                    <div className="col-span-4 space-y-3 ">
                         {contents.map((item, index) => {
                            return (
                            <div key={index} className="space-y-3">
                                <Link href={item.url} className=" ">
                                <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-700 p-4 shadow-md border-b border-gray-400 justify-between flex">
                                    <span className="flex font-bold  space-x-3">
                                    <BsBookmark className="text-xl" />
                                    <span className="text-sm">{item.ques}</span>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            );
                        })}
                    </div>

                    <div className="col-span-4 space-y-3 ">
                         {contents.map((item, index) => {
                            return (
                            <div key={index} className="space-y-3">
                                <Link href={item.url} className=" ">
                                <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-700 p-4 shadow-md border-b border-gray-400 justify-between flex">
                                    <span className="flex font-bold  space-x-3">
                                    <BsBookmark className="text-xl" />
                                    <span className="text-sm">{item.ques}</span>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            );
                        })}
                    </div>

                    <div className="col-span-4 space-y-3 ">
                         {contents.map((item, index) => {
                            return (
                            <div key={index} className="space-y-3">
                                <Link href={item.url} className=" ">
                                <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-700 p-4 shadow-md border-b border-gray-400 justify-between flex">
                                    <span className="flex font-bold  space-x-3">
                                    <BsBookmark className="text-xl" />
                                    <span className="text-sm">{item.ques}</span>
                                    </span>
                                </div>
                                </Link>
                            </div>
                            );
                        })}
                    </div>
                  
                </div>
                

                <h3 className="py-2">All Projects</h3>
                
              </div>

              {/*//todo *************** Tab01--end************* */}

              {/*//! *************** Tab02--start************* */}

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }>
                {/* Content 2 */}

                <h3 className="py-2">All Projects</h3>
                
              </div>

              {/*//! *************** Tab02--End************* */}
              {/* //* ************* Tab-3--start ************** */}
              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }>
                {/* Content 3*/}
               
              </div>
              {/*//todo *************** Tab03--End************* */}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Fqa;
