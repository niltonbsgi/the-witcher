import React from 'react';
import LoginForm from '../../components/login-form';
import { LogIn } from '../../utils/utils';

const URL = 'https://my-json-server.typicode.com/niltonbsgi/my-user-db/sw_data_base?email=@email&password=@password';

class TwSignInPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            hiddenMessage: true,
            login: false
        };
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton() {
        const { onGetUserAccess, history } = this.props
        const { email, password } = this.state

        let cURL = URL
            .replace('@email', email)
            .replace('@password', password)
        onGetUserAccess(cURL)
            .then(() => {
                const { user } = this.props

                this.setState({
                    ...this.state,
                    hiddenMessage: (user.length > 0 ? true : false),
                    login: (user.length > 0 ? true : false)
                })

                if (user.length > 0) {
                    LogIn()
                    history.push('/playlist/')
                }
            })
            .catch(() => {
                this.props.history.push('/500/')
            })
    }

    render() {
        return (
            <LoginForm
                hiddenMessage={this.state.hiddenMessage}
                onChangeEmail={(e) => this.setState({ ...this.state, email: e.target.value })}
                onChangePassWord={(e) => this.setState({ ...this.state, password: e.target.value })}
                onClickButton={() => this.handleButton()}
            />
        )
    }
}

export default TwSignInPage;
