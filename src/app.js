import './style.scss';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import Home from './views/Home';
import NewsPage from './views/News';
import LoginPage from './views/Login';
import ProfilePage from './views/Profile';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      dispatch({
        type: 'LOGIN',
        payload: currentUser,
      });
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
