import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchParamsExample: React.FC = () => {
    const [searchParams] = useSearchParams();

    // Retrieve a specific query parameter value
    const username = searchParams.get('username');

    return (
        <div>
            <h1>Search Params Example</h1>
            <p>Username from query parameter: {username || 'Not provided'}</p>
        </div>
    );
};

export default SearchParamsExample;
