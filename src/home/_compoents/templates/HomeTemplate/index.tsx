import React from 'react';

const HomeTemplate = ({ header, navbar, main }) => {
  return (
    <div className="root">
      {header}
      <nav>{navbar}</nav>
      <main>{main}</main>
    </div>
  );
};

export default HomeTemplate;
