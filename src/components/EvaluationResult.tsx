// components/EvaluationResult.tsx
import React from 'react';

const EvaluationResult: React.FC = () => {
  const score = 85; // Dummy score
  const evaluationDate = new Date().toLocaleDateString();

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Evaluation Results</h2>
      <div className="mt-2">
        <p>Overall Score: {score}</p>
        <p>Evaluation Date: {evaluationDate}</p>
        <p>Criteria A: 28</p>
        <p>Criteria B: 30</p>
        <p>Criteria C: 27</p>
      </div>
    </div>
  );
};

export default EvaluationResult;
