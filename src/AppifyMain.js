import React from 'react';
import AppifyNumbers from './AppifyNumbers';
import AppifyPagination from './AppifyPagination';

let numbers = [1, 2, 3, 4];

const AppifyMain = () => (
    <main className="col-md-8">
    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    {/* Number list */}
    <AppifyNumbers />
    <AppifyPagination />
    </main>
  );

export default AppifyMain;