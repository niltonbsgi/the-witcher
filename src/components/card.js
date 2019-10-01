import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ url, onClick}) => {
    return (
        <img style={ style } onClick={ onClick } src={url}/>    
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
    width: '40%', 
    height:'45%', 
    marginRight:'10px',
    marginLeft:'30px',
    marginBottom:'30px',
    border:'solid 1px',
    borderColor: '#f5e59a',
    cursor: 'pointer'
}  

export default Card;
