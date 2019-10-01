import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, IndexRedirect } from 'react-router-dom';
import TwPlayList from '../views/playlist/tw-playlist-list';
import TwSignInPage from '../views/login/tw-signin-page';
import TwVideoTraillerDetail from '../views/playlist/tw-video_trailler-detail';
import Page404NotFount from '../views/PageError/not-fount';
import PageError from '../views/PageError/error';

function Routes() {  
    return (
      <Router>
        <div>
            <Switch>              
              <Route exact path='/playlist/' component={TwPlayList} />  
              <Route exact path='/video_trailler/' component={TwVideoTraillerDetail} />
              <Route path='/signin/' component={TwSignInPage} />
              <Route path='/404/' component={Page404NotFount} />
              <Route path='/500/' component={PageError} />
              <Route exact path='/' component={TwSignInPage} />
              <Redirect from='*' to='/404' />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default Routes;

  