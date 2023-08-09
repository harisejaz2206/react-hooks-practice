import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import LinksPage from './components/LinksPage';
import LocationPage from './components/LocationPage';
import UseInRouterContextExample from './components/UseInRouterContextExample';
import UseLinkClickHandlerExample from './components/UseLinkClickHandlerExample';
import NavigationMenu from './components/NavigationMenu';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import LoginForm from './components/LoginForm';
import { Breadcrumbs } from './components/Breadcrumbs';
import Home from './components/Home';
import NavigationType from './components/useNavigationType';
import { ChildComponent, NestedRoutePage } from './components/NestedRoutePage';
import UserDetailsPage from './components/UserDetailsPage';
import ResolvedPathExample from './components/useResolvedPath'
import SearchParamsExample from './components/SearchParamsExample';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Routes>
        <Route path="/useHref" element={<LinksPage />} />
        <Route path="/useLocation" element={<LocationPage />} />
        <Route path="/useInRouterContext" element={<UseInRouterContextExample />} />
        <Route path="/useLinkClickHandler" element={<UseLinkClickHandlerExample />} />
        <Route path="/useMatch" element={<NavigationMenu />} />
        {/* <Route path="*" element={<Breadcrumbs />} /> Breadcrumbs will have access to route data */}
        <Route path="/useNavigate" element={<Home />} />
        <Route path="/useNavigationType" element={<NavigationType />} />
        <Route path="/useOutlet" element={<NestedRoutePage />} >
          <Route path="child" element={<ChildComponent />} />
        </Route>
        <Route path="/user/:userId" element={<UserDetailsPage />} />
        <Route path="/useResolvedPath" element={<ResolvedPathExample />} />
        <Route path="/useSearchParams" element={<SearchParamsExample />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
