import React from 'react';
import styled from 'styled-components';
import {
  alignItems, color, flexWrap, fontSize, height, justifyContent, position, textAlign, borderBottom, space, background,
} from 'styled-system';

const SectionBase = styled.section`
  ${background}
  ${space}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${alignItems}
  ${textAlign}
  ${height}
  ${position}
  ${flexWrap}
  ${borderBottom}
`;

const Section = ({ children, ...props }) => (
  <SectionBase className="section" {...props}>
    {children}
  </SectionBase>
);

export default Section;
