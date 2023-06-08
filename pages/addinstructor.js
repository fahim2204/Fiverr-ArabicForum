import React, { useState } from "react";
import Link from "next/link";

const AddInstructorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coursesTaught, setCoursesTaught] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [certifications, setCertifications] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic here

        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setCoursesTaught('');
        setExperience('');
        setEducation('');
        setCertifications('');
        setAvailability('');
    };

    return (
        <div className="max-w-7xl  p-5  md:p-10  ">
            <div className=" border p-5 bg-green-200">
                <form onSubmit={handleSubmit} className="mx-auto ">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                            Phone:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    {/* Additional fields go here */}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
