import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TwPlaylistListConteiner from '../views/playlist/tw-playlist-list-conteiner';
import TwSigninConteiner from '../views/login/tw-signin-conteiner';
import Page404NotFound from '../views/PageError/not-found';
import PageError from '../views/PageError/error';

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
