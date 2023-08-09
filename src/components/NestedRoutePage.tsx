import { Route, Routes, Outlet } from 'react-router-dom';
import React from 'react';

export const NestedRoutePage = () => {
    return (
        <div>
            <h1>Nested Routes Example</h1>
            <Outlet />
        </div>
    );
};


export const ChildComponent = () => {
    return <div><h2>I'm a child component!</h2></div>;
};


