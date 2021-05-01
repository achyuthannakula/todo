import React from 'react';

export default (({ color = 'currentColor', ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      {...rest}
    >
      <path
        fill="inherit"
        d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z"
      />
    </svg>
  );
}) as React.FC<React.SVGProps<SVGSVGElement>>;
