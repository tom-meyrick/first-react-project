import React from 'react';

const Paragraph = ({message}) => (
    <article className="col-md-6">
        <p>{message ? message : "Hello World"}</p>
    </article>
);

export default Paragraph;