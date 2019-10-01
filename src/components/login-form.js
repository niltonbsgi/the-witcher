import React from 'react';
import logo_dark from  '../assets/logo_dark.png';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    
    render(){

        const { onChangeEmail, onChangePassWord, onClickButton, hiddenMessage } = this.props
        
        return (
            <div>
                <div align="center">
                    <img 
                        src={ logo_dark }
                        style={ style.styleImageAlign }
                    />
                </div>
                <div align="center">                    
                    <input 
                        placeholder="Email" 
                        style={ style.styleInputLogin } 
                        onChange={ (e)=> onChangeEmail(e) }/>
                </div>
                <div align="center">                    
                    <input 
                        type="password"
                        placeholder="Password" 
                        style={ style.styleInputLogin }
                        onChange={(e)=> onChangePassWord(e) }/>
                </div>
                <div align="center">                    
                    <h4 hidden={ hiddenMessage } style={ style.styleAlertMessage }>* Invalid User Email or Password *</h4>
                    <button 
                        style={ style.styleButtonLogin } 
                        onClick={ ()=> onClickButton()  }>LOGIN</button>
                </div>
            </div>
        )
    }
} 

const style = {
    styleAlertMessage: { 
        color:'red' 
    },
    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
    styleButtonLogin:{
        marginTop:'4%',
        width: '8%',
        padding: '9px',
        background: 'transparent',
        color: 'white',
        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
        cursor: 'pointer',
        border: '0.1px solid #fffdd0'
    },
    styleImageAlign: { 
        width: '20%', 
        marginTop:'16%' 
    },
    styleInputLogin: { 
        width: '20%', 
        marginTop:'2%',
        background: 'transparent',
        border: 'none',
        outline: 0,
        borderBottom: '0.1px solid #fffdd0',
        fontSize:'14px',
        color: '#fffdd0',
        padding: 8,
        fontFamily: 'Times, "Times New Roman", Georgia, serif',
         
    }

}

LoginForm.propTypes = {
    onChangeEmail: PropTypes.func,
    onChangePassWord: PropTypes.func,
    onClickButton: PropTypes.func,
    hiddenMessage: PropTypes.bool
};

LoginForm.defaultProps = {
    onChangeEmail: ()=> {},
    onChangePassWord: ()=> {},
    onClickButton: ()=> {},
    hiddenMessage: true
};

export default LoginForm
