import React, { useEffect, useState } from "react";
import logo from "../../../public/image/instagram.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { convertToEmbeddedUrl } from "../../../utils/helper";
import { baseUrl } from "../../../utils/config";

const instructorprofile = () => {
  const [instructorData, setInstructorData] = useState({});
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      getSingleInstructor();
    }
  }, [userId]);

  const getSingleInstructor = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/${userId}`);
      // console.log(response.data);
      setInstructorData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="max-w-7xl md:mx-auto  py-6 text-center">
        <div className="grid md:grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-4 bg-gray-50">
            <div className="font-bold text-xl text-green-700 px-16">
              <img
                className="w-full rounded-xl"
                src="/image/ad.webp"
                alt="ad"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 bg-gray-50">
            <div className="lg:flex my-4">
              <div className="flex justify-center p-2 mx-auto">
              <Image
                    src={
                      instructorData.profilePic
                        ? `/image/instructor/${instructorData.profilePic}`
                        : logo
                    }
                    alt={instructorData.fullName}
                    height={256}
                    width={256}
                    className="w-64 h-64 rounded-full object-cover border"
                  />
              </div>
              <div className="max-w-full lg:w-1/2 space-y-1 m-auto">
                <div className="justify-start items-start text-left py-4">
                  <span className="font-bold text-3xl">
                    {instructorData.fullName}
                  </span>
                  <br />
                  <span className="font-medium text-lg text-gray-400">
                    {instructorData.designation}
                  </span>
                  <br />
                  <span className="text-lg text-black">
                    {instructorData.bio}
                  </span>
                </div>

                {/* <div className="bg-gray-300 rounded-xl p-2">
                  <div className="flex justify-between space-x-2 p-4 my-1">
                    <span className="font-bold inline-block text-center">
                      Articles
                      <br />
                      <span className="justify-start items-start text-left">
                        41
                      </span>
                    </span>
                    <span className="font-bold inline-block text-center">
                      Followerss
                      <br />
                      <span className="justify-start items-start text-left">
                        941
                      </span>
                    </span>
                    <span className="font-bold inline-block text-center">
                      Rating
                      <br />
                      <span className="justify-start items-start text-left">
                        14
                      </span>
                    </span>
                  </div>
                </div> */}
                <div className="m-auto flex justify-start space-x-4">
                  <Link href={`/instructor/${instructorData.id}/ask`}>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-xl my-5 transition-all duration-300">
                      Ask question
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {instructorData?.video?.map((assignedVideo, index) => (
                <div key={index}>
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="130"
                      src={convertToEmbeddedUrl(assignedVideo.url)}
                      title="YouTube Video"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default instructorprofile;
