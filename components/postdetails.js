import React from "react";

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
  {
    id: 7,
    title: "John Doe",
    description: "Professor",
  },
];

const PostDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Post Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-3xl border-gray-300">
          <thead className="bg-green-200">
            <tr className="text-center">
              <th className="py-2 px-4 border-b text-center">Sl No.</th>
              <th className="py-2 px-4 border-b text-center">ID</th>
              <th className="py-2 px-4 border-b text-center">Title</th>
              <th className="py-2 px-4 border-b text-center">Description</th>
            
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={instructor.id}>
                <td className="py-2 px-4 border-b text-center ">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.iD}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.title}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.description}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostDetails;
