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
          <Link href={"/"} className="px-5 border-x border-gray-300 text-base font-bold hover:underline">
            Back
          </Link>
          <span className="px-5 border-x border-gray-300">
            Asked on: 11.06.2023
          </span>
        </div>

        <div className="bg-green-50 p-5 md:p-12 border-x-4 border-green-600">
          <h2 className="text-end text-xl font-bold py-4">Question</h2>
          <p className="font-semibold text-end">{questionData?.title}</p>
        </div>

        <div className="my-5 py-5 bg-gray-100 px-8 justify-between text-end">
          <span className="px-5 text-xl font-bold">Answer</span>
        </div>

        <div
          className="p-5 md:px-16 mb-10 text-end"
          dangerouslySetInnerHTML={{ __html: questionData?.description }}
        ></div>
      </div>
    </div>
  );
};
