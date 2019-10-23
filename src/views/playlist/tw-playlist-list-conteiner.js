import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _List } from './tw-playlist-action';
import TwPlayList from './tw-playlist-list';

function mapStateToProps(state) {
    const { list, error } = state.PlaylistReducer;
    return { list, error };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetList: (url_request) => {
            const promise = _List(url_request);
            dispatch(promise);
            return promise;
        }
    }
}

class TwPlaylistListConteiner extends React.PureComponent{
    render(){
        return <TwPlayList {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TwPlaylistListConteiner));
