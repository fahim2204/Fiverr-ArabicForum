import React, { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../utils/config";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "cookies-next";

const Home = () => {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const postLoginUser = async (formData) => {
    setIsError(false);
    try {
      const loggedUser = await axios.post(`${baseUrl}/login`, formData);
      setCookie("user", loggedUser.data.user);
      router.push("/dashboard");
    } catch (error) {
      setIsError(true);
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: "123456",
    };
    postLoginUser(formData);
  };

  return (
    <div>
      <div className="max-w-7xl m-auto">
        <div className="grid md:grid-cols-12 gap-5 py-5 max-h-full">
          <div className="col-span-12 my-8">
            <div className="max-w-md mx-auto">
              <div className="font-bold text-xl bg-green-200 border-t-4 border-t-green-700 text-center rounded p-4">
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
                {isError && (
                  <div className="col-span-12">
                    <p className="text-center text-rose-700 text-sm">
                      Username or password invalid!!
                    </p>
                  </div>
                )}
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
