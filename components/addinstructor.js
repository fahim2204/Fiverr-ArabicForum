import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsPersonCircle, BsCameraFill } from "react-icons/bs";
import { baseUrl } from "../utils/config";
import { useRouter } from "next/router";

const AddInstructorForm = () => {
  const router = useRouter();
  const imageInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setProfileImage(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setProfileImage(objectUrl);
  }, [selectedFile]);

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
    <div className="max-w-7xl p-5 md:p-10">
      <div className="border p-5 rounded-xl max-w-lg mx-auto bg-green-200 ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 mx-auto px-8 py-5"
        >
          {/* <div className="col-span-5 flex items-center justify-start relative">
            {profileImage ? (
              <img
                className="w-32 h-32 rounded-full shadow border"
                src={profileImage}
                alt="Profile"
              />
            ) : (
              <BsPersonCircle className="w-32 h-32" />
            )}
            <BsCameraFill
              className="absolute bottom-9 right-10 text-4xl bg-white shadow-sm rounded-full p-1 cursor-pointer"
              onClick={() => imageInputRef.current.click()}
            />

            <input
              type="file"
              name="profilePic"
              ref={imageInputRef}
              onChange={(e) => setSelectedFile(e.target.files[0])}
              accept="image/png, image/gif, image/jpeg, image/jpg"
              required
              hidden
            />
          </div> */}
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
          <div className="col-span-12 mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Profile Pic:
            </label>
            <div style={{ direction: "rtl" }}>
              <input
                type="file"
                name="profilePic"
                ref={imageInputRef}
                onChange={(e) => setSelectedFile(e.target.files[0])}
                accept="image/png, image/gif, image/jpeg, image/jpg"
                required
              />
            </div>
          </div>
          <div className="col-span-12 mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="col-span-12 mb-4">
            <label
              htmlFor="designation"
              className="block text-gray-700 font-bold mb-2"
            >
              Designation:
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="col-span-12 mb-4">
            <label
              htmlFor="institution"
              className="block text-gray-700 font-bold mb-2"
            >
              Institution:
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="col-span-12 mb-4">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="col-span-12 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInstructorForm;
