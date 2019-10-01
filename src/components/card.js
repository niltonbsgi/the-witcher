import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, url, onClick}) => {
    return (
        <div style={style.styleDiv}>
            <img style={style.styleImage} onClick={ onClick } src={url}/>    
            <div style={ style.styleDivImage } >
                <label>{ title }</label>
            </div>
        </div>
    )
}
Card.propTypes = {
    url: PropTypes.string,
    onClick: PropTypes.func
};

Card.defaultProps = {
    url: '',
    onClick: ()=> {}
  };

const style = { 
    styleDiv:{
        float:'left',
        width: '40%',
        overflow:'hidden',
        marginRight:'10px',
        marginLeft:'30px',
        marginBottom:'30px',
        border:'solid 1px',
        borderColor: '#f5e59a'
    },
    styleDivImage:{
        color:'white', 
        textAlign:'center', 
        width:'100%', 
        position:'relative' 
    },
    styleImage:{
        cursor: 'pointer',
        width: '100%', 
        float:'left'
    }
}  

export default Card;
