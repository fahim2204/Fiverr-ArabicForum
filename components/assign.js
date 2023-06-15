import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertToEmbeddedUrl } from "../utils/helper";
import { baseUrl } from "../utils/config";

const AssignPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState(null);
  const [assignedVideos, setAssignedVideos] = useState([]);
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => {
    getAllInstructorDropdownList();
  }, []);

  useEffect(() => {
    if (selectedPerson) getAssignedVideoById(selectedPerson);
    else setAssignedVideos([]);
  }, [selectedPerson]);

  const getAllInstructorDropdownList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdropdown`);
      // console.log(response.data);
      setInstructorData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAssignedVideoById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/videos/${id}`);
      // console.log(response.data);
      setAssignedVideos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postAssignVideo = async (instructor, url) => {
    try {
      await axios.post(`${baseUrl}/videos`, {
        url,
        fkUserId: instructor,
      });
      getAssignedVideoById(selectedPerson);
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
    console.log(selectedPerson, youtubeUrl);
    if (selectedPerson && youtubeUrl) {
      postAssignVideo(selectedPerson, youtubeUrl);
    }
  };
  const deleteAssignedVideo = async (id) => {
    try {
      await axios.delete(`${baseUrl}/videos/${id}`);
      getAssignedVideoById(selectedPerson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDeleteVideo = (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteAssignedVideo(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Assign Videos</h1>
      <form
        onSubmit={handleVideoAssign}
        className="rounded-xl bg-green-200 max-w-lg mx-auto p-6"
      >
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
              placeholder="https://www.youtube.com/watch?v=example"
              onChange={handleYoutubeUrlChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={!(selectedPerson && youtubeUrl)}
            className={`${
              selectedPerson && youtubeUrl ? "bg-green-500" : "bg-green-300"
            } hover:bg-green-400 text-white font-bold py-2 px-4 cursor-pointer rounded transition-all duration-300`}
          >
            Assign Video
          </button>
        </div>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        {assignedVideos.map((assignedVideo, index) => (
          <div key={index}>
            <div className="rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="130"
                src={convertToEmbeddedUrl(assignedVideo.url)}
                title="YouTube Video"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-5 mt-2 rounded transition-all duration-300"
                onClick={() => handleDeleteVideo(assignedVideo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignPage;
