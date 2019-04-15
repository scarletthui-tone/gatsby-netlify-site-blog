import React from 'react';
import styled, { css } from 'styled-components';
import {
  borderBottom, color, fontSize, fontWeight, space, textAlign, width,
} from 'styled-system';

export const Headline = styled.h1`
  font-size: 24px;
  margin: 0;
  text-align: inherit;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.1px;
  
  ${props => props.uppercase
    && css`
      text-transform: uppercase;
    `}
  
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${borderBottom}
`;

const Heading = ({ children, uppercase, ...props }) => (
  <Headline fontSize={[4, 4, 5]} pb={[3, 3, 4]} uppercase={uppercase} {...props}>
    {children}
  </Headline>
);

Heading.displayName = 'Heading';

export default Heading;
