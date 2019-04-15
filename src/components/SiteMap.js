import React from 'react';
import styled from 'styled-components';

import Row from './Atoms/Row';
import Column from './Atoms/Column';
import Paragraph from './Atoms/Paragraph';
import Box from './Atoms/Box';
import CustomLink from './Atoms/CustomLink';
import theme from '../styles/theme';

const LinkWord = styled(Paragraph)`
  color: ${props => props.theme.color.white};
  transition: color ease-in 100ms;
  &:hover {
    color: ${props => props.theme.color.tealish};
  }
`;

class SiteMap extends React.PureComponent {
  render() {
    const { footer } = this.props;

    return (
      <Row justifyContent="flex-end">
        {footer.map(category => (
          <Column col="is-3">
            <Paragraph color={theme.color.white} fontWeight={500} pb={2}>
              {category.title || ''}
            </Paragraph>
            {category.links.map(({ label, url }) => (
              <Box>
                <CustomLink to={url}>
                  <LinkWord color={theme.color.white} fontSize={1}>
                    {label}
                  </LinkWord>
                </CustomLink>
              </Box>
            ))}
          </Column>
        ))}
      </Row>
    );
  }
}

export default SiteMap;
