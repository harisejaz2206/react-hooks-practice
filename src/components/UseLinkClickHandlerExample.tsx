import React from 'react';
import CustomLink from './CustomLink';

const UseLinkClickHandlerExample: React.FC = () => {
  return (
    <div>
      <h1>Custom Link Example</h1>
      <p>
        <CustomLink to="https://www.openai.com">Click here to navigate to OpenAI's website</CustomLink>
      </p>
    </div>
  );
};

export default UseLinkClickHandlerExample;
