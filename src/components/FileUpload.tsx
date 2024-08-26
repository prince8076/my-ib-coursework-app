// components/FileUpload.tsx
"use client";
import React from 'react';
import { useStore } from '../store/useStore';

const FileUpload: React.FC = () => {
  const { addFile } = useStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => addFile(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-700">
        Drag and drop a PDF <br /> <span className="text-xs text-gray-400">*Limit 25 MB per file.</span>
      </h2>
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="border-dashed border-2 border-gray-300 rounded-md p-6 w-full text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="mt-2 text-sm text-gray-600">
            Upload your file
          </span>
        </div>
      </label>

      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="coursework-type" className="text-gray-500 font-medium">
            Select your course & subjects*
          </label>
          <select id="coursework-type" className="mt-1 p-2 border border-gray-300 rounded-md">
            <option value="">Coursework Type</option>
            {/* Add more options as needed */}
          </select>
          <select id="subject" className="mt-2 p-2 border border-gray-300 rounded-md">
            <option value="">Subject</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="essay-title" className="text-gray-500 font-medium">
            Enter your essay title* (Required)
          </label>
          <input
            id="essay-title"
            type="text"
            placeholder="how nation works..."
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button className="mt-4 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Evaluate your Score
      </button>
    </div>
  );
};

export default FileUpload;
