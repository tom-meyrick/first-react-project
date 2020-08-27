import React from "react";

const Paragraph = ({ children }) => (
  <article className="col-md-6">
    <p>{children ? children : "Hello World"}</p>
  </article>
);

export default Paragraph;
