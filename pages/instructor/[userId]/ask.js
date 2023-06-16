import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import logo from "../../../public/image/instagram.webp";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../../utils/config";

// const DynamicJoditEditor = dynamic(
//   () => import("jodit-react").then((module) => module.default),
//   { ssr: false }
// );
const DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AskQuestionPage = () => {
  const editor = useRef(null);
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [instructorData, setInstructorData] = useState({});
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      getSingleInstructor();
    }
  }, [userId]);

  const getSingleInstructor = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/${userId}`);
      // console.log(response.data);
      setInstructorData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postQuestion = async (instructor, title, desc) => {
    try {
      await axios.post(`${baseUrl}/questions`, {
        title,
        fkUserId: instructor,
        description: desc,
      });
      router.push("/")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleQuestionSubmit = () => {
    postQuestion(instructorData.id, title, content);
  };

  return (
    <div id="askquestion" className="max-w-7xl mx-auto py-6 text-center">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={
              instructorData.profilePic
                ? `/image/instructor/${instructorData.profilePic}`
                : logo
            }
            alt={instructorData.fullName}
            height={128}
            width={128}
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>
        <div className="mt-2 text-xl font-semibold">
          {instructorData.fullName}
        </div>
        <div className="text-gray-500">{instructorData.designation}</div>
      </div>
      <div className="mt-8 px-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-5 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <DynamicJoditEditor
          ref={editor}
          value={content}
          //   config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => setContent(newContent)}
        />
        <button
          className="px-7 py-3 mt-5 bg-green-500 text-white rounded-lg"
          onClick={handleQuestionSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AskQuestionPage;
