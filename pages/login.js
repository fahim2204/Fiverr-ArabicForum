import React, { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../utils/config";

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

const Home = () => {
  const [qestionData, setQuestionData] = useState([]);

  useEffect(() => {
    getAllQuestionList();
  }, []);

  const getAllQuestionList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/questions`);
      // console.log(response.data);
      setQuestionData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postRegisterUser = async (formData) => {
    try {
      await axios.post(`${baseUrl}/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/instructor");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", e.target.profilePic.files[0]);
    formData.append("username", e.target.username.value);
    formData.append("password", e.target.password.value);
    formData.append("fullName", e.target.fullName.value);
    formData.append("designation", e.target.designation.value);
    formData.append("institution", e.target.institution.value);
    // formData.append("type", e.target.type.value);
    formData.append("type", "instructor");
    formData.append("bio", e.target.bio.value);
    postRegisterUser(formData);
  };

  return (
    <div>
      <div className="max-w-7xl m-auto">
        <div className="grid md:grid-cols-12 gap-5 py-5 max-h-full">
          <div className="col-span-12 my-8">
            <div className="max-w-md mx-auto">
              <div className="font-bold text-xl bg-green-100 border-x-4 border-x-green-700 text-green-700 text-center rounded p-4">
                Login
              </div>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-12 mx-auto px-8 py-5 bg-green-50 rounded-b shadow-md"
              >
                <div className="col-span-12 mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div className="col-span-12 mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div className="col-span-12 flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
