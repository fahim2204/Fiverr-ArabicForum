import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { baseUrl } from "../../utils/config";
import Link from "next/link";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";
const DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default () => {
  const [questionData, setQuestionData] = useState({});
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { questionId } = router.query;
  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (questionId) {
      getSingleQuestion();
    }
  }, [questionId]);

  useEffect(() => {
    const userData = JSON.parse(getCookie("user") || null);
    setUserData(userData);
  }, []);

  useEffect(() => {
    if (questionId && Object.entries(questionData).length !== 0 && userData) {
      if (!userData || userData?.id !== questionData.fkUserId) {
        console.log("pushing to dashboard");
        router.push("/dashboard");
      }
    }
  }, [questionData, userData]);

  const getSingleQuestion = async () => {
    try {
      const response = await axios.get(`${baseUrl}/questions/${questionId}`);
      // console.log(response.data);
      setQuestionData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAnswer = async (questionId, content) => {
    try {
      await axios.post(`${baseUrl}/answers`, {
        id: questionId,
        answer: content,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAnswerSubmit = () => {
    postAnswer(questionId, content);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="my-5 py-5 bg-gray-100 px-8 flex justify-between items-left text-end">
          <Link
            href={"/"}
            className="px-5 border-x border-gray-300 text-base font-bold hover:underline"
          >
            Back
          </Link>
          <span className="px-5 border-x border-gray-300">
            Asked on:{" "}
            <span className="font-medium">
              {new Date(questionData?.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </span>
        </div>

        <div className="bg-green-50 p-5 md:p-10 border-x-4 border-green-600">
          <h2 className="text-end text-xl font-bold pb-4">
            {questionData?.title}
          </h2>
          <p
            className="font-semibold text-end"
            dangerouslySetInnerHTML={{ __html: questionData?.description }}
          ></p>
        </div>

        {questionData?.answer ? (
          <>
            <div className="my-5 py-5 bg-gray-100 px-8 justify-between text-end">
              <span className="px-5 text-xl font-bold">Answer</span>
            </div>
            <div
              className="p-5 md:px-16 mb-10 text-end"
              dangerouslySetInnerHTML={{ __html: questionData?.answer }}
            ></div>
          </>
        ) : (
          <>
            <div className="my-5 py-5 bg-gray-100 px-8 justify-between text-center">
              <div className="text-center text-lg font-medium">Your Answer</div>
              <div className="mt-8 px-6">
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
                  onClick={handleAnswerSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
