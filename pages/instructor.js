import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/instagram.webp";
const instructor = () => {
    const instructors = [
        {
            name: "John Doe",
            designation: "Frontend Developer",
            profilePic: "/john-doe.jpg",
        },
        {
            name: "Jane Smith",
            designation: "Backend Developer",
            profilePic: "/jane-smith.jpg",
        },
        {
            name: "Mike Johnson",
            designation: "UI/UX Designer",
            profilePic: "/mike-johnson.jpg",
        },
        {
            name: "Sarah Williams",
            designation: "Full Stack Developer",
            profilePic: "/sarah-williams.jpg",
        },
        {
            name: "John Doe",
            designation: "Frontend Developer",
            profilePic: "/john-doe.jpg",
        },
        {
            name: "Jane Smith",
            designation: "Backend Developer",
            profilePic: "/jane-smith.jpg",
        },
        {
            name: "Mike Johnson",
            designation: "UI/UX Designer",
            profilePic: "/mike-johnson.jpg",
        },
        {
            name: "Sarah Williams",
            designation: "Full Stack Developer",
            profilePic: "/sarah-williams.jpg",
        },

    ];
    return (
        <div id="instructor" className="max-w-7xl md:mx-auto  py-6 text-center">
            <div className=" grid md:grid-cols-2 px-4 gap-4">
                <div>
                    <Image src={logo} alt="..." className="w-64 object-cover" />
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Link href="/instructorprofile">
                                <Image src={logo} alt="..." className="w-32 h-32 rounded-full object-cover" />
                                </Link>
                                <div className="mt-2 text-xl font-semibold">{instructor.name}</div>
                                <div className="text-gray-500">{instructor.designation}</div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default instructor;

