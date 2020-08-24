import React, {fragment} from 'react';
import AppifyHeader from './AppifyHeader';
import AppifyAside from './AppifyAside';
import AppifyMain from './AppifyMain';

const Appify = () => (
    <body className="mt-4">
    <AppifyHeader />
    <div className="row">
    <AppifyAside />
    <AppifyMain />
    </div>
    </body>
  );

export default Appify;
