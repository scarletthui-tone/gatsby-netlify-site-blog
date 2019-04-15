import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {
  alignSelf, borderColor, borderRadius, borders, color, fontSize, space, textAlign, width,
} from 'styled-system';

export const StyledButton = styled.button`
  border-radius: 2px;
  ${alignSelf}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${borderColor}
  ${borderRadius}
  ${borders}
`;

const Button = ({
  children, primary, text, ...props
}) => (
  <StyledButton className={`button ${primary ? `is-primary` : ''}`} fontSize={[1, 1, 2]} {...props}>
    {!text && !children && 'Submit'}
    {!text && children}
    {text && text === 'ok' && <FormattedMessage id="common:button.ok" defaultMessage="OK" />}
    {text && text === 'submit' && <FormattedMessage id="common:button.submit" defaultMessage="Submit" />}
    {text && text === 'back' && <FormattedMessage id="common:button.back" defaultMessage="Back" />}
    {text && text === 'next' && <FormattedMessage id="common:button.next" defaultMessage="Next" />}
    {text && text === 'viewAll' && <FormattedMessage id="common:button.viewAll" defaultMessage="View All" />}
  </StyledButton>
);

export default Button;
