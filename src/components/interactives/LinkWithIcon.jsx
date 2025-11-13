import React from 'react';

const LinkWithIcon = ({ label, url }) => {
  return (
    <li className="flex items-center my-1">
      <a href={url} className="text-blue-500 underline flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
        {label}
      </a>
    </li>
  );
};

export default LinkWithIcon;
