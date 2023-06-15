import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import logo from "../../../public/image/instagram.webp";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import JoditEditor from "jodit-react";

// const DynamicJoditEditor = dynamic(
//   () => import("jodit-react").then((module) => module.default),
//   { ssr: false }
// );

const AskQuestionPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [instructorData, setInstructorData] = useState({});
  const router = useRouter();
  const { userId } = router.query;



  useEffect(() => {
    if (userId) {
      getSingleInstructor();
    }
  }, [userId]);

//   useEffect(() => {
//     if (editor.current) {
//       editor.current.events.on("change", (newValue) => {
//         setContent(newValue);
//       });
//     }
//   }, []);

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
            src={logo}
            alt={instructorData.fullName || "profile"}
            className="object-cover"
            responsive
            width={128}
            height={128}
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
        <JoditEditor
          ref={editor}
          value={content}
        //   config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
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
