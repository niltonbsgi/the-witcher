import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WithHoc from '../hoc/with-hoc';

const StyleDivLabel = styled.label`
    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
    padding: 10px;
    display: block;
`

const StylefigCaption = styled.div`
    width: '100%',
    position: 'absolute',
    bottom: '0',
    background-color: 'rgba(0,0,0,.6)',
`

const WrappedCard = styled.div`
    width: calc(50% - 17px);
    height: 232px;
    overflow: hidden;
    margin-bottom: 35px;
    border: solid 1px;
    border-color: #f5e59a;
    position: relative;
    background-size: 190%;
    background-position: center center;
    cursor: pointer;
`
const Card = ({ title, url, onClick }) => {
    return (
        <WrappedCard  style={ { backgroundImage: `url(${url})` } } onClick={() => onClick()}>
            <StylefigCaption>
                <StyleDivLabel>{title}</StyleDivLabel>
            </StylefigCaption>
        </WrappedCard>
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

export default WithHoc(Card);
