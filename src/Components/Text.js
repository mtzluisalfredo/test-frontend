import styled from 'styled-components';
import is from 'styled-is';

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Span = styled.span`
  font-size: 16px;
  margin: 0;
  ${is('fontSize')`
    font-size: ${props => props.fontSize};
  `};
  ${is('primary')`
    color: #6d6767;
  `};
`;


export { Paragraph, Span };
