import React from 'react';
import styled from 'styled-components';
import {
  alignItems,
  color,
  flexWrap,
  fontSize,
  height,
  justifyContent,
  position,
  textAlign,
  space,
  background,
  border,
} from 'styled-system';

// Row does not accept space
const RowBase = styled.div.attrs({ className: 'columns' })`
  ${space}
  ${background}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${alignItems}
  ${textAlign}
  ${height}
  ${position}
  ${flexWrap}
  ${border}
`;

const Row = ({
  multi, children, ...props
}) => (
  <RowBase className={`${multi ? 'is-multiline' : ''}`} {...props}>
    {children}
  </RowBase>
);

export default Row;
