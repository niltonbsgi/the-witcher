import { combineReducers } from 'redux';
import Playlist from '../views/playlist/tw-playlist-reducer';
import Signin from '../views/login/tw-signin-reducer';

const rootReducer = combineReducers({
    PlaylistReducer: Playlist,
    SigninReducer: Signin
});

export default rootReducer;
