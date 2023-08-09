import React from 'react';
import { useResolvedPath } from 'react-router-dom';

const ResolvedPathExample: React.FC = () => {
    const resolvedPath = useResolvedPath('./profile'); // Relative path

    return (
        <div>
            <h1>Resolved Path Example</h1>
            <p>The resolved path for "./profile" is: {resolvedPath.pathname}</p>
        </div>
    );
};

export default ResolvedPathExample;
