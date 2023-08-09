// ./components/LinksPage.tsx
import React from 'react';
import { useHref } from 'react-router-dom';

const LinksPage: React.FC = () => {
  const href = useHref('https://www.openai.com');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Use Href Example</h2>
      <a href={href} className="text-indigo-600 hover:text-indigo-800">Go to target page</a>
    </div>
  );
};

export default LinksPage;
