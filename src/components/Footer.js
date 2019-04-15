import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Logo from '../img/logo.svg';

import { LANG_JP, LANG_ZH } from '../config/langSetting';
import Container from './Atoms/Container';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import Box from './Atoms/Box';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import SiteMap from './SiteMap';
import Paragraph from './Atoms/Paragraph';
import theme from '../styles/theme';
import CustomLink from './Atoms/CustomLink';

{
  /* <Link to={`/${LANG_JP}${pathname}`}>JP</Link> */
}
{
  /* / */
}
{
  /* <Link to={`/${LANG_ZH}${pathname}`}>ZH</Link> */
}
{
  /* / */
}
{
  /* <Link to={`/${pathname}`}>EN</Link> */
}

const FooterSection = styled.footer`
  && {
    padding: 64px 0 0 0;
    border-top: #24b99d solid 4px;
    background-color: ${props => props.theme.color.blackBlue};
  }
`;

class FooterUI extends React.Component {
  render() {
    const { data, pathname } = this.props;
    const { footer, copyright } = data.markdownRemark.frontmatter;

    return (
      <FooterSection className="footer">
        <Container pb={3} px={3}>
          <Row>
            <Column col="is-3">
              <Box width={140}>
                <PreviewCompatibleImage imageInfo={{ image: Logo }} />
              </Box>
            </Column>
            <Column col="is-9">
              <SiteMap footer={footer} />
            </Column>
          </Row>
        </Container>
        <Box width="100%" borderTop="1px solid #dee2e6" py={3} textAlign="center">
          <Box as="span" mr={2}>
            <Paragraph color={theme.color.white} textAlign="center" fontSize={0}>
              {copyright}
            </Paragraph>
          </Box>
          <CustomLink to="/terms_and_conditions">
            <Box as="span" mr={2}>
              <Paragraph fontSize={0}>
                <FormattedMessage id="footer:tnc" defaultMessage="Terms and Conditions" />
              </Paragraph>
            </Box>
          </CustomLink>
          <CustomLink to="/risk_disclosure">
            <Box as="span" mr={2}>
              <Paragraph fontSize={0}>
                <FormattedMessage id="footer:risk" defaultMessage="Risk Disclosure" />
              </Paragraph>
            </Box>
          </CustomLink>
          <CustomLink to="/privacy_policy">
            <Box as="span">
              <Paragraph fontSize={0}>
                <FormattedMessage id="footer:privacy" defaultMessage="Privacy Policy" />
              </Paragraph>
            </Box>
          </CustomLink>
        </Box>
      </FooterSection>
    );
  }
}


export const footerQuery = graphql`
  query SiteMapPageQuery {
    markdownRemark(frontmatter: { component: { eq: "footer" } }) {
      frontmatter {
        copyright
        footer {
          title
          links {
            label
            url
            openNewTab
          }
        }
      }
    }
  }
`;


class Footer extends React.PureComponent {
  render() {
    return (
      <StaticQuery
        query={footerQuery}
        render={data => <FooterUI data={data} />}
      />
    );
  }
}

export default Footer;
