import { useMatches } from 'react-router-dom';

export const Breadcrumbs = () => {
  const matches = useMatches(); // must be used within a component rendered inside <Routes>

  return (
    <nav aria-label="breadcrumb">
      <ol>
        {matches.map((match, index) => (
          <li key={index}>
            {/* You can customize how you use the match data here */}
            <a href={match.pathname}>{match.pathname}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};