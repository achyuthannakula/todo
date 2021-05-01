import React from 'react';
import './index.css';

const HomeTemplate = ({ header, navbar, main }) => {
  return (
    <>
      {header}
      <div className="root">
        {navbar}
        {main}
      </div>
    </>
  );
};

export default HomeTemplate;
