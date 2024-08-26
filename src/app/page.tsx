// pages/index.tsx
import React from 'react';
import FileUpload from '../components/FileUpload';
import CourseworkForm from '../components/CourseworkForm';
import CourseworkList from '../components/CourseworkList';
import EvaluationResult from '../components/EvaluationResult';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">IB Coursework Evaluation</h1>
      <FileUpload />
      <CourseworkForm />
      <CourseworkList />
      <EvaluationResult />
    </div>
  );
};

export default Home;
