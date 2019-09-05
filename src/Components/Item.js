import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Span } from './Text';

const Container = styled.div`
  display: flex;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
  border-radius: 5px;
  color: white;
  width: 100%;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  height: 200px;
  margin-bottom: 5px;
    &:hover #kid {
      background: #000000d9;
      display: flex;
    }
`;

const Kid = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Item = ({
  urlImage,
  name,
}) => (
  <Container img={urlImage}>
    <Kid id='kid'>
      <Wrapper>
        <StyledSpinner viewBox='0 0 50 50'>
          <circle
            className='path'
            cx='25'
            cy='25'
            r='20'
            fill='none'
            strokeWidth='2'
          />
        </StyledSpinner>
        <Span>{name}</Span>
      </Wrapper>

    </Kid>
  </Container>
);

Item.propTypes = {
  name: PropTypes.string,
  urlImage: PropTypes.string,
};


export default Item;
