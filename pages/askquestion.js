
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import logo from "../public/image/instagram.webp";
import dynamic from 'next/dynamic';

const DynamicJoditEditor = dynamic(() => import('jodit-react').then((module) => module.default), { ssr: false });

const AskQuestionPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const instructor = {
    name: "John Doe",
    designation: "Frontend Developer",
  };

  useEffect(() => {
    if (editor.current) {
      editor.current.events.on('change', (newValue) => {
        setContent(newValue);
      });
    }
  }, []);

  return (
    <div id="askquestion" className="max-w-7xl mx-auto py-6 text-center">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={logo}
            alt={instructor.name}
            className="object-cover"
            layout="responsive"
            width={128}
            height={128}
          />
        </div>
        <div className="mt-2 text-xl font-semibold">{instructor.name}</div>
        <div className="text-gray-500">{instructor.designation}</div>
      </div>
      <div className="mt-8 px-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-5 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <DynamicJoditEditor
          ref={editor}
          value={content}
          onChange={newContent => setContent(newContent)}
        />
        <button className="px-6 py-3 mt-2 bg-green-500 text-white rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AskQuestionPage;
