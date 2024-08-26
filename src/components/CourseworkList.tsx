// components/CourseworkList.tsx
"use client";
import React from 'react';
import { useStore } from '../store/useStore';

const CourseworkList: React.FC = () => {
  const { files } = useStore();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Uploaded Coursework</h2>
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
            <li key={index} className="border p-2 my-2 rounded">
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </li>
          ))}
        </ul>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};

export default CourseworkList;
