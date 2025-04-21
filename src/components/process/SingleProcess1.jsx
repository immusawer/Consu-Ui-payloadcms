import React from 'react';

const SingleProcess1 = ({ process }) => {
  const { activeClass, thumb, steps, title, text } = process;

  return (
    <div className={`process-style-one ${activeClass || ''}`}>
      <div className="thumb">
        <img 
          src={thumb} 
          alt={title}
          onError={(e) => {
            // Fallback if image fails to load
            e.target.src = '/assets/img/placeholder.jpg';
          }}
        />
        <span>{steps}</span>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default SingleProcess1;