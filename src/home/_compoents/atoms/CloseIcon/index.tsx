import React from 'react';

export default (({ color = 'currentColor', ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill={color}
      {...rest}
    >
      <g fill="inherit">
        <path
          d="M7.822 7l2.509-2.503c.229-.228.229-.6 0-.828-.229-.229-.6-.229-.829 0L7 6.178 4.497 3.669c-.228-.229-.6-.229-.828 0-.229.229-.229.6 0 .828L6.178 7 3.669 9.502c-.11.11-.172.26-.172.415 0 .155.062.304.172.414.11.11.259.172.414.172.156 0 .305-.062.414-.172L7 7.823l2.502 2.508c.11.11.26.172.415.172.155 0 .304-.062.414-.172.11-.11.172-.259.172-.414 0-.156-.062-.305-.172-.415L7.823 7z"
          transform="translate(-990 -482) translate(868 184) translate(18 232) translate(10 62) translate(94 4)"
        />
      </g>
    </svg>
  );
}) as React.FC<React.SVGProps<SVGSVGElement>>;
