import React, { useState } from "react";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Professor",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    institution: "University of Example",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Assistant Professor",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    institution: "College of Example",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "Professor",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    institution: "University of Example",
  },
  {
    id: 4,
    name: "Jane Smith",
    designation: "Assistant Professor",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    institution: "College of Example",
  },
  {
    id: 5,
    name: "Jane Smith",
    designation: "Assistant Professor",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    institution: "College of Example",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "Professor",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    institution: "University of Example",
  },
  {
    id: 7,
    name: "Jane Smith",
    designation: "Assistant Professor",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    institution: "College of Example",
  },
];

const InstructorList = () => {
  const [instructorData, setInstructorData] = useState(instructors);

  const handleDelete = (id) => {
    const updatedData = instructorData.filter((instructor) => instructor.id !== id);
    setInstructorData(updatedData);
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Instructor List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-3xl border-gray-300">
          <thead className="bg-green-200">
            <tr className="text-center">
              <th className="py-2 px-4 border-b text-center">Sl No.</th>
              <th className="py-2 px-4 border-b text-center">Instructor Name</th>
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
                <td className="py-2 px-4 border-b text-center">{instructor.name}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.designation}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.bio}</td>
                <td className="py-2 px-4 border-b text-center">{instructor.institution}</td>
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
