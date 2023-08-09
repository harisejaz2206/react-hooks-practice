import React from 'react';
import { useInRouterContext } from 'react-router-dom';

const UseInRouterContextExample: React.FC = () => {
  const isInRouterContext = useInRouterContext();

  return (
    <div>
      <h1>useInRouterContext Example</h1>
      {isInRouterContext ? (
        <p>You are inside a Router context!</p>
      ) : (
        <p>You are NOT inside a Router context!</p>
      )}
    </div>
  );
};

export default UseInRouterContextExample;
