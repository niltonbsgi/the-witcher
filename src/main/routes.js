import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, IndexRedirect } from 'react-router-dom';
import TwPlayList from '../views/playlist/tw-playlist-list';
import TwSignInPage from '../views/login/tw-signin-page';
import TwVideoTrailerDetail from '../views/playlist/tw-video_trailer-detail';
import Page404NotFound from '../views/PageError/not-found';
import PageError from '../views/PageError/error';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path='/playlist/' component={TwPlayList} />
          <Route exact path='/video_trailer/' component={TwVideoTrailerDetail} />
          <Route path='/signin/' component={TwSignInPage} />
          <Route path='/404/' component={Page404NotFound} />
          <Route path='/500/' component={PageError} />
          <Route exact path='/' component={TwSignInPage} />
          <Redirect from='*' to='/404' />
        </Switch>
    </Router>
  );
}

export default Routes;
