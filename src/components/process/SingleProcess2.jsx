import React from 'react';

const SingleProcess2 = ({ process }) => {
    const { title, steps, thumb } = process

    return (
        <>
            <div className="process-style-two">
                <div className="thumb">
                    <img src={`/assets/img/process/${thumb}`} alt="Image Not Found" />
                    <span>{steps}</span>
                </div>
                <h3>{title}</h3>
            </div>
        </>
    );
};

export default SingleProcess2;