import React, { useState } from 'react';

const Professionalhelp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq-section p-4 border-b border-gray-300 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">How can I know if I need professional help for my mental health?</h2>
        <button onClick={toggleVisibility} className="focus:outline-none">
          {isVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      {isVisible && (
        <p className="mt-4 text-gray-700">
            It may be time to seek professional help if you experience persistent feelings of sadness,
            anxiety, or hopelessness, have difficulty managing daily tasks, or notice a significant
            change in your behavior or mood. If your symptoms interfere with your work, relationships,
            or overall quality of life, reaching out to a mental health professional can provide support,
            diagnosis, and appropriate treatment.
        </p>
      )}
    </div>
  );
};

export default Professionalhelp;
