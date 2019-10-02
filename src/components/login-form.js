import React from 'react';
import logoDark from '../assets/images/logo-dark.png';
import PropTypes from 'prop-types';
import '../assets/scss/login.scss';

class LoginForm extends React.Component {
    render() {
        const { onChangeEmail, onChangePassWord, onClickButton, hiddenMessage } = this.props

        return (
            <section className="login-form">
                <form style={style.styleForm}>
                    <div className="login-form__form-group">
                        <img
                            src={logoDark}
                            style={style.styleImageAlign}
                        />
                    </div>
                    <div className="login-form__form-group login-form__input-container">
                        <input
                            placeholder="Email"
                            style={style.styleInputLogin}
                            onChange={(e) => onChangeEmail(e)}
                        />
                    </div>
                    <div className="login-form__form-group login-form__input-container">
                        <input
                            type="password"
                            placeholder="Password"
                            style={style.styleInputLogin}
                            onChange={(e) => onChangePassWord(e)}
                        />
                    </div>
                    <div className="login-form__form-group login-form__actions-container">
                        <h4 hidden={hiddenMessage} style={style.styleAlertMessage}>
                            * Invalid User Email or Password *
                        </h4>
                        <button
                            type="button"
                            className="login-form__button"
                            style={style.styleButtonLogin}
                            onClick={() => onClickButton()}
                        >
                                LOGIN
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

const style = {
    styleAlertMessage: {
        color: 'red'
    },

    styleInputLogin: {
    },

    styleButtonLogin: {
        color: 'white',
        cursor: 'pointer',
        border: '0.1px solid #fffdd0'
    },
}

LoginForm.propTypes = {
    onChangeEmail: PropTypes.func,
    onChangePassWord: PropTypes.func,
    onClickButton: PropTypes.func,
    hiddenMessage: PropTypes.bool
};

LoginForm.defaultProps = {
    onChangeEmail: () => { },
    onChangePassWord: () => { },
    onClickButton: () => { },
    hiddenMessage: true
};

export default LoginForm
