import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _Get_User_Access } from './tw-signin-action';
import TwSignInPage from './tw-signin-page';

function mapStateToProps(state) {
    const { user, error } = state.SigninReducer;
    return { user, error };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetUserAccess: (url) => {
            const promise = _Get_User_Access(url);
            dispatch(promise);
            return promise;
        }
    }
}

class TwSigninConteiner extends React.PureComponent{
    render(){
        return <TwSignInPage {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TwSigninConteiner));
