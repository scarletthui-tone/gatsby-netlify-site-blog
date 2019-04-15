import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  color, fontSize, fontWeight, lineHeight, space, textAlign, width,
} from 'styled-system';

const ContainerBase = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
`;

const Container = ({
  className, children, fluid, ...props
}) => (
  <ContainerBase className={`container ${fluid ? 'is-fluid' : ''} ${className || ''}`} {...props}>
    {children}
  </ContainerBase>
);

Container.defaultProps = {
  fluid: false,
};

Container.propTypes = {
  fluid: propTypes.bool,
  children: propTypes.node,
};

export default Container;
