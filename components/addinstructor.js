import React, { useState } from "react";
import Link from "next/link";

const AddInstructorForm = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [bio, setBio] = useState('');
    const [institution, setInstitution] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic here

        // Reset form fields
        setName('');
        setDesignation('');
        setBio('');
        setInstitution('');
    };

    return (
        <div className="max-w-7xl  p-5  md:p-10  ">
            <div className=" border p-5 rounded-xl bg-green-200">
                <form onSubmit={handleSubmit} className="mx-auto ">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border  border-gray-300 rounded-lg px-4 py-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                           Designation:
                        </label>
                        <input
                            type="text"
                            id="designation"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={designation}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                          Bio:
                        </label>
                        <input
                            type="text"
                            id="bio"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={bio}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                         Institution:
                        </label>
                        <input
                            type="text"
                            id="institution"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value={institution}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddInstructorForm;
