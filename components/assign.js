// import React, { useState } from "react";

// const AssignPage = () => {
//   const [selectedPerson, setSelectedPerson] = useState("");
//   const [videoFile, setVideoFile] = useState(null);
//   const [assignedVideos, setAssignedVideos] = useState([]);

//   const handlePersonSelect = (e) => {
//     setSelectedPerson(e.target.value);
//   };

//   const handleVideoFileChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleVideoUpload = (e) => {
//     e.preventDefault();

//     if (selectedPerson && videoFile) {
//       const assignedVideo = { person: selectedPerson, videoFile };
//       setAssignedVideos([...assignedVideos, assignedVideo]);
//       setSelectedPerson("");
//       setVideoFile(null);
//     }
//   };

//   const handleDeleteVideo = (index) => {
//     const updatedVideos = [...assignedVideos];
//     updatedVideos.splice(index, 1);
//     setAssignedVideos(updatedVideos);
//   };

//   const dropdownOptions = [
//     { value: "john_doe", label: "John Doe" },
//     { value: "jane_smith", label: "Jane Smith" },
//     { value: "bob_johnson", label: "Bob Johnson" },
//   ];

//   // Group assigned videos by person
//   const groupedVideos = assignedVideos.reduce((groups, video) => {
//     if (!groups[video.person]) {
//       groups[video.person] = [];
//     }
//     groups[video.person].push(video);
//     return groups;
//   }, {});

//   return (
//     <div className="max-w-7xl mx-auto p-5 md:p-10">
//       <h1 className="text-2xl font-bold mb-5 text-center">Assign Videos</h1>
//       <form onSubmit={handleVideoUpload}>
//         <div className="grid grid-cols-12 gap-4 border p-5 rounded-xl bg-green-200">
//           <div className="col-span-12">
//             <label htmlFor="person" className="block text-gray-700 font-bold mb-2">
//               Select Person:
//             </label>
//             <select
//               id="person"
//               className="w-full sm:max-w-2xl border border-gray-300 rounded-xl px-4 py-2"
//               value={selectedPerson}
//               onChange={handlePersonSelect}
//             >
//               <option value="">Select a person</option>
//               {dropdownOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-span-12">
//             <label htmlFor="videoFile" className="block text-gray-700 font-bold mb-2">
//               Upload Video:
//             </label>
//             <input
//               type="file"
//               id="videoFile"
//               className="border w-full sm:max-w-2xl border-gray-300 rounded-xl px-4 py-2"
//               onChange={handleVideoFileChange}
//               accept="video/*"
//             />
//           </div>
//         </div>
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded"
//           >
//             Assign Video
//           </button>
//         </div>
//       </form>
//       {Object.keys(groupedVideos).map((person) => (
//         <div key={person} className="mt-8">
//           <h2 className="text-lg font-bold mb-2">{person}</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {groupedVideos[person].map((assignedVideo, index) => (
// <div key={index}>
//   <div className="relative">
//     <video
//       controls
//       onMouseEnter={(e) => {
//         const deleteButton = e.target.nextElementSibling;
//         if (deleteButton) {
//           deleteButton.style.opacity = "1";
//         }
//       }}
//       onMouseLeave={(e) => {
//         const deleteButton = e.target.nextElementSibling;
//         if (deleteButton) {
//           deleteButton.style.opacity = "0";
//         }
//       }}
//     >
//       <source src={URL.createObjectURL(assignedVideo.videoFile)} />
//     </video>
//     <button
//       className="absolute top-2 right-2 bg-red-500 text-white font-bold py-1 px-2 rounded opacity-0 transition-opacity duration-300"
//       onClick={() => handleDeleteVideo(index)}
//     >
//       Delete
//     </button>
//   </div>
// </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AssignPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/config";

const AssignPage = () => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [assignedVideos, setAssignedVideos] = useState([]);
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => {
    getAllInstructorList();
  }, []);

  const getAllInstructorList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdropdown`);
      // console.log(response.data);
      setInstructorData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePersonSelect = (e) => {
    setSelectedPerson(e.target.value);
  };

  const handleYoutubeUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleVideoAssign = (e) => {
    e.preventDefault();

    if (selectedPerson && youtubeUrl) {
      const assignedVideo = { person: selectedPerson, youtubeUrl };
      setAssignedVideos([...assignedVideos, assignedVideo]);
      setSelectedPerson("");
      setYoutubeUrl("");
    }
  };

  const handleDeleteVideo = (index) => {
    const updatedVideos = [...assignedVideos];
    updatedVideos.splice(index, 1);
    setAssignedVideos(updatedVideos);
  };


  // Group assigned videos by person
  const groupedVideos = assignedVideos.reduce((groups, video) => {
    if (!groups[video.person]) {
      groups[video.person] = [];
    }
    groups[video.person].push(video);
    return groups;
  }, {});

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Assign Videos</h1>
      <form onSubmit={handleVideoAssign} className="rounded-xl bg-green-200 max-w-lg mx-auto p-6">
        <div className="grid grid-cols-12 gap-4 border">
          <div className="col-span-12">
            <label
              htmlFor="person"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Person:
            </label>
            <select
              id="person"
              className="w-full sm:max-w-2xl border border-gray-300 cursor-pointer rounded-xl px-4 py-2"
              value={selectedPerson}
              onChange={handlePersonSelect}
            >
              <option value="">Select a person</option>
              {instructorData.map((instructor, index) => (
                <option key={index} value={instructor.id}>
                  {instructor.username}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-12">
            <label
              htmlFor="youtubeUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              YouTube Video URL:
            </label>
            <input
              type="text"
              id="youtubeUrl"
              className="border w-full sm:max-w-2xl border-gray-300 rounded-xl px-4 py-2"
              value={youtubeUrl}
              placeholder="https://www.youtube.com/watch?v=HGOEV9IxmWg"
              onChange={handleYoutubeUrlChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Assign Video
          </button>
        </div>
      </form>
      {Object.keys(groupedVideos).map((person) => (
        <div key={person} className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {groupedVideos[person].map((assignedVideo, index) => (
              <div key={index}>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${assignedVideo.youtubeUrl}`}
                      title="YouTube Video"
                      onMouseEnter={(e) => {
                        const deleteButton =
                          e.target.parentNode.nextElementSibling;
                        if (deleteButton) {
                          deleteButton.style.opacity = "1";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const deleteButton =
                          e.target.parentNode.nextElementSibling;
                        if (deleteButton) {
                          deleteButton.style.opacity = "0";
                        }
                      }}
                    />
                  </div>
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white font-bold py-1 px-2 rounded opacity-0 transition-opacity duration-300"
                    onClick={() => handleDeleteVideo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignPage;
