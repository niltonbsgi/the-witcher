import React from 'react';
import PropTypes from 'prop-types';
import { Z_BLOCK } from 'zlib';

const Card = ({ title, url, onClick }) => {
    return (
        <div onClick={() => onClick()} style={{...style.styleDiv, ...{ backgroundImage: `url(${url})` }}}>
            <div style={style.stylefigcaption}>
                <label style={style.styleDivLabel} >{title}</label>
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
    onClick: () => { }
};

const style = {
    styleDiv: {
        width: 'calc(50% - 17px)',
        height: '232px',
        overflow: 'hidden',
        marginBottom: '35px',
        border: 'solid 1px',
        borderColor: '#f5e59a',
        position: 'relative',
        backgroundSize: '190%',
        backgroundPosition: 'center center',
        cursor: 'pointer',
    },
    styleDivLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '200',
        textAlign: 'center',
        padding: '10px',
        display: 'block',
    },
    stylefigcaption: {
        width: '100%',
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,.6)',
    },
    styleImage: {
        cursor: 'pointer',
        width: '100%',
        float: 'left'
    }
}

export default Card;
