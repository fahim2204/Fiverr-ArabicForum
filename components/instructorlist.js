import React, { useState, useEffect } from "react";
import { baseUrl } from "../utils/config";
import axios from "axios";

const InstructorList = () => {
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => {
    getAllInstructorList();
  }, []);

  const getAllInstructorList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      // console.log(response.data);
      setInstructorData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteInstructor = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/users/${id}`);
      getAllInstructorList();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteInstructor(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Instructor List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-3xl border-gray-300 overflow-x-scroll">
          <thead className="bg-green-200">
            <tr className="text-center">
              <th className="py-2 px-4 border-b text-center">Sl No.</th>
              <th className="py-2 px-4 border-b text-center">Username</th>
              <th className="py-2 px-4 border-b text-center">
                Instructor Name
              </th>
              <th className="py-2 px-4 border-b text-center">Designation</th>
              <th className="py-2 px-4 border-b text-center">Bio</th>
              <th className="py-2 px-4 border-b text-center">Institution</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructorData.map((instructor, index) => (
              <tr key={instructor.id}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">
                  {instructor.username}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {instructor.fullName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {instructor.designation}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {instructor.bio}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {instructor.institution}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => handleDelete(instructor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorList;
