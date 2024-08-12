import React, { useState } from 'react';

const Mentaltreatments = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq-section p-4 border-b border-gray-300 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-semibold">What types of treatments are available for mental health issues?</h2>
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
            Treatments for mental health issues vary and may include therapy, medication, or a combination of both.
            Common types of therapy include cognitive-behavioral therapy (CBT), psychotherapy, and counseling.
            Medications, such as antidepressants or anti-anxiety drugs, may be prescribed by a psychiatrist.
            Additionally, lifestyle changes, support groups, and self-care practices can complement
            professional treatment and enhance overall well-being.
        </p>
      )}
    </div>
  );
};

export default Mentaltreatments;
