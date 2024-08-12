import React, { useState } from 'react';

const Mentalhealth = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq-section p-4 border-b border-gray-300 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">What is mental health, and why is it important?</h2>
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
          Mental health encompasses emotional, psychological, and social well-being.
           It affects how we think, feel, and act, influencing how we handle stress,
            relate to others, and make choices. Good mental health is crucial for
             overall well-being and daily functioning, as it helps us cope with challenges,
              build relationships, and maintain a positive outlook on life.
        </p>
      )}
    </div>
  );
};

export default Mentalhealth;
