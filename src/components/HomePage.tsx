import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  'useActionData',
  'useAsyncError',
  'useAsyncValue',
  'useBeforeUnload',
  'useFetcher',
  'useFetchers',
  'useFormAction',
  'useHref',
  'useInRouterContext',
  'useLinkClickHandler',
  'useLinkPressHandler',
  'useLoaderData',
  'useLocation',
  'useMatch',
  'useMatches',
  'useNavigate',
  'useNavigation',
  'useNavigationType',
  'useOutlet',
  'useOutletContext',
  'useParams',
  'useResolvedPath',
  'useRevalidator',
  'useRouteError',
  'useRouteLoaderData',
  'useRoutes',
  'useSearchParams',
  'useSubmit'
];

const HomePage: React.FC = () => {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8 text-indigo-600">React Router Hooks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <Link key={index} to={`/${route}`} className="transition duration-300 ease-in-out bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-center p-4 rounded-lg shadow-md transform hover:scale-105">
              {route}
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default HomePage;
export {};