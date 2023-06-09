import React, { useState } from "react";

const instructors = [
  {
    id: 1,
    title: "John Doe",
    description: "Professor",
  },
  {
    id: 2,
    title: "John Doe",
    description: "Professor",
  },
  {
    id: 3,
    title: "John Doe",
    description: "Professor",
  },
  {
    id: 4,
    title: "John Doe",
    description: "Professor",
  },
  {
    id: 5,
    title: "John Doe",
    description: "Professor",
  },
  {
    id: 6,
    title: "John Doe",
    description: "Professor",
  },
];

const PostDetails = () => {
  const [instructorData, setInstructorData] = useState(instructors);

  const handleDelete = (id) => {
    const updatedData = instructorData.filter((instructor) => instructor.id !== id);
    setInstructorData(updatedData);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Post Details</h1>
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
            {instructorData.map((instructor, index) => (
              <tr key={instructor.id}>
                <td className="py-2 px-4 border-b text-center ">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.title}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.description}</td>
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

export default PostDetails;
