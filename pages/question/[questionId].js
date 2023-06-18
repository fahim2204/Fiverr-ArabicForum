import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/config";
import Link from "next/link";

export default () => {
  const [questionData, setQuestionData] = useState({});
  const router = useRouter();
  const { questionId } = router.query;

  useEffect(() => {
    if (questionId) {
      getSingleQuestion();
    }
  }, [questionId]);

  const getSingleQuestion = async () => {
    try {
      const response = await axios.get(`${baseUrl}/questions/${questionId}`);
      // console.log(response.data);
      setQuestionData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            {" "}
            <div className="my-5 py-5 bg-gray-100 px-8 justify-between text-center">
              <span className="px-5 text-base text-gray-600 font-medium">
                No Answer Yet
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
