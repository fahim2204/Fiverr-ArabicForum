import React, { useState } from "react";

const AddInstructorForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    designation: "",
    institution: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the form data
    console.log(formData);
  };

  return (
    <div className="max-w-7xl p-5 md:p-10">
      <div className="border p-5 rounded-xl max-w-lg mx-auto bg-green-200 ">
        <form onSubmit={handleSubmit} className="mx-auto px-8 py-5">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block text-gray-700 font-bold mb-2"
            >
              Designation:
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="institution"
              className="block text-gray-700 font-bold mb-2"
            >
              Institution:
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInstructorForm;
