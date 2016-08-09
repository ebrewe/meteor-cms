import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//route components
import AppContainer from './ui/containers/appContainer';
import AuthPageSignin from './ui/pages/authPageSignin';
import NotFoundPage from './ui/pages/notFound';

export const renderRoutes = () => (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="signin" component={AuthPageSignin} />

        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
);
