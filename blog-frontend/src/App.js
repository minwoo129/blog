import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisgerPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTORS</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisgerPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
