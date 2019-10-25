import React,{ Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const TwPlaylistListConteiner = React.lazy(() => import('../views/playlist/tw-playlist-list-conteiner'));
const TwSigninConteiner = React.lazy(() => import('../views/login/tw-signin-conteiner'));
const Page404NotFound = React.lazy(() => import('../views/PageError/not-found'));
const PageError = React.lazy(() => import('../views/PageError/error'));

function Routes() {
  return (
    <Router>
        <Switch>
          <Suspense fallback={<div>Loading…</div>}>
            <Route exact path='/playlist/' component={TwPlaylistListConteiner} />
            <Route path='/signin/' component={TwSigninConteiner} />
            <Route path='/404/' component={Page404NotFound} />
            <Route path='/500/' component={PageError} />
            <Route exact path='/' component={TwSigninConteiner} />
          <Redirect from='*' to='/signin' />
        </Suspense>  
        </Switch>
    </Router>
  );
}

export default Routes;
