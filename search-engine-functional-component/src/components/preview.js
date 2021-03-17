import React from 'react';

const Preview = (props) => {
  return (
    <div className="container">
      <div>
        <img src={props.photoUrl} alt={props.tags} />
      </div>
    </div>
  );
};

export default Preview;
