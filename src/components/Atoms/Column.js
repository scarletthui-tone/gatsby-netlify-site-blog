import React from 'react';
import styled from 'styled-components';
import {
  background,
  color,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  border,
  flexDirection,
} from 'styled-system';

const ColumnBase = styled.div`
  ${space}
  ${fontSize}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${display}
  ${background}
  ${border}
  ${flexDirection}
`;

const Column = ({ className, children, ...props }) => (
  <ColumnBase className={`column ${props.col || ''} ${className || ''}`} {...props}>
    {children}
  </ColumnBase>
);

export default Column;
