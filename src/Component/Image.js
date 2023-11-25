import React from 'react';
import './Image.css';
import bird from './bird.svg.jpg';

const Birds = () => (
    <div className="images">
        <img alt="blue bird" src={bird} />
        <p>This is a test image that was taken freely from Pixabay</p>
    </div>
);

export default Birds