import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/config";
import { getCookie } from "cookies-next";
import Link from "next/link";

const PostDetails = () => {
  const [qestionData, setQuestionData] = useState([]);

  useEffect(() => {
    getAllQuestionList();
  }, []);

  const getAllQuestionList = async () => {
    const userCookie = await getCookie("user");
    const instructorId = userCookie ? JSON.parse(userCookie).id : null;

    try {
      const response = await axios.post(`${baseUrl}/questions/instructor`, {
        instructorId,
        mode: 0,
      });
      // console.log(response.data);
      setQuestionData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/questions/${id}`);
      getAllQuestionList();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteQuestion(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Pending Question For You
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-3xl border-gray-300">
          <thead className="bg-green-200">
            <tr className="text-center">
              <th className="py-2 px-4 border-b text-center">Sl No.</th>
              <th className="py-2 px-4 border-b text-center">Title</th>
              <th className="py-2 px-4 border-b text-center">Description</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {qestionData.length > 0 ? (
              <>
                {qestionData.map((question, index) => (
                  <tr key={question.id}>
                    <td className="py-2 px-4 border-b text-center ">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center hover:text-green-500">
                      <Link href={`/question/${question.id}`}>
                        {question.title}
                      </Link>
                    </td>
                    <td
                      className="py-2 px-4 border-b text-center"
                      dangerouslySetInnerHTML={{ __html: question.description }}
                    ></td>
                    <td className="py-2 px-4 border-b text-center">
                      <Link
                        href={`/answer/${question.id}`}
                        className="bg-green-500 text-white rounded-2xl px-3 py-1 font-bold hover:opacity-80"
                      >
                        Answer
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan={4} className="text-center py-3 text-gray-600">
                    No Data Found
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDetails;
