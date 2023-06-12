import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";
import Link from "next/link";
const contents = [
  {
    id: "1",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "2",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "3",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "4",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "5",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },

  {
    id: "6",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "7",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "8",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
  {
    id: "9",
    url: "/qanswer",
    ques: "How can we have free will when the divine decree controls us?",
    time: "04-06-2023",
  },
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
          <div className="col-span-12 md:col-span-4 bg-gray-50">
            <div className="font-bold text-xl text-green-700 ">
                <img className="w-full rounded-xl" src="/image/ad.webp" alt="ad" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 bg-green-100  border-t-4 border-green-700 rounded p-4">
            <div className=" font-bold text-xl text-green-700 p-2">
              <div className="justify-center text-center items-center m-auto flex mb-3 gap-2">
                <BiBookmarkAlt className="text-3xl" />
                All Answer
              </div>
            </div>

            <div className="space-y-2">
              {contents.map((item, index) => {
                return (
                  <div key={index} className="space-y-2">
                    <Link href={item.url} className=" ">
                      <div className="bg-white hover:bg-green-500 text-gray-500 hover:text-white transition-all transform duration-500 p-4 shadow-md border-b border-gray-400 justify-between flex">
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
        </div>
      </div>
    </div>
  );
};

export default Fqa;
