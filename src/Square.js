import React from 'react';

const Square = ({color}) => (
    <figure>
        <div style={{background: `${color}`, width: 200, height: 200}}>
        </div>
    </figure>
);

Square.defaultProps = {
    color: "grey"
};

export default Square;