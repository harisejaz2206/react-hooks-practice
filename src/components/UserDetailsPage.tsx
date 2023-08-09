import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();

    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {userId}</p>
        </div>
    );
};

export default UserDetailsPage;
