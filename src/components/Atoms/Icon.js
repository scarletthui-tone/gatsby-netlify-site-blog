import React from 'react';
import styled from 'styled-components';
import { height, space, width } from 'styled-system';
import theme from '../../styles/theme';

const IconWrapper = styled.div`
    line-height: 0;
    fill: ${props => props.color};
    ${width}
    ${height}
    ${space}
`;

const Icon = ({ size = 16, color = theme.color.white, children, ...rest }) => (
  <IconWrapper width={size} height={size} color={color} {...rest}>
    {children}
  </IconWrapper>
);

export default Icon;
