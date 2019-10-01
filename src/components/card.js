import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, url, onClick}) => {
    return (
        <div style={style.styleDiv}>            
            <img style={style.styleImage} onClick={ onClick } src={url}/>                
            <div style={ style.stylefigcaption }>
                <label style={ style.styleDivLabel } >{ title }</label>
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
        borderColor: '#f5e59a',
        position:'relative',
    },
    styleDivLabel:{        
        color:'white', 
        textAlign:'center', 
        width:'100%'            
    },
    stylefigcaption:{        
        color:'white', 
        textAlign:'center', 
        width:'100%',
        position:'absolute',
        bottom:'3px'
    },
    styleImage:{
        cursor: 'pointer',
        width: '100%', 
        float:'left'
    }
}  

export default Card;
