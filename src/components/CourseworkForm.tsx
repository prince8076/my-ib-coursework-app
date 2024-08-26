"use client";

import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const CourseworkForm: React.FC = () => {
  const { setFormData } = useStore();
  const [type, setType] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({ type, subject, title });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="">Select Type</option>
        <option value="IA">IA</option>
        <option value="EE">EE</option>
      </select>
      <select value={subject} onChange={(e) => setSubject(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="">Select Subject</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
      </select>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Essay Title"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CourseworkForm;
