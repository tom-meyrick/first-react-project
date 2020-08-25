import React from 'react';

const Header = ({children}) => (
    <header className="jumbotron">
        <h1>Hello {children}</h1>
    </header>
);

export default Header;