import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import logo from "../../public/image/instagram.webp";
import { baseUrl } from "../../utils/config";
import axios from "axios";

const instructor = () => {
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

  return (
    <div id="instructor" className="max-w-7xl md:mx-auto py-6 text-center">
      <div className="grid md:grid-cols-12 px-4 gap-4">
        <div className="col-span-12 md:col-span-4 bg-gray-50">
          <div className="flex justify-center">
            <img className="w-full rounded-xl" src="/image/ad.webp" alt="ad" />
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instructorData.map((instructor, index) => (
              <Link key={index} href={`/instructor/${instructor.id}`}>
                <div className="flex flex-col items-center">
                  <Image
                    src={instructor.profilePic || logo}
                    alt={instructor.fullName}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="mt-2 text-2xl font-semibold">
                    {instructor.fullName}
                  </div>
                  <div className="text-gray-500">{instructor.designation}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default instructor;
