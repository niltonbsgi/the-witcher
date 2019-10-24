import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LazyImport from '../components/lazy-import';

const TwPlaylistListConteiner = LazyImport({
  loader: () => import('../views/playlist/tw-playlist-list-conteiner'),
})

const TwSigninConteiner = LazyImport({
  loader: () => import('../views/login/tw-signin-conteiner'),
})

const Page404NotFound = LazyImport({
  loader: () => import('../views/PageError/not-found'),
})

const PageError = LazyImport({
  loader: () => import('../views/PageError/error'),
})

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path='/playlist/' component={TwPlaylistListConteiner} />
          <Route path='/signin/' component={TwSigninConteiner} />
          <Route path='/404/' component={Page404NotFound} />
          <Route path='/500/' component={PageError} />
          <Route exact path='/' component={TwSigninConteiner} />
          <Redirect from='*' to='/404' />
        </Switch>
    </Router>
  );
}

export default Routes;
