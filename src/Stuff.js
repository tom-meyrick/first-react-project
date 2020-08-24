import React, { Fragment } from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square'; 
import People from './People'; 

const Stuff = () => (
    <>
    <Header text="Tom" />
    <Paragraph message="That's all folks" />
    <Square color="green" />
    <People />
    </>
);

export default Stuff;