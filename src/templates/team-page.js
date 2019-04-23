import React from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { PageHelmet } from '../components/PageHelmet';
import Content, { HTMLContent } from '../components/Content';
import Section from '../components/Atoms/Section';
import Container from '../components/Atoms/Container';
import Row from '../components/Atoms/Row';
import Column from '../components/Atoms/Column';
import TeamHeader from '../components/Team/TeamHeader';
import Box from '../components/Atoms/Box';
import Heading from '../components/Atoms/Heading';
import Paragraph from '../components/Atoms/Paragraph';

import teambg from '../img/teambg.svg';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import theme from '../styles/theme';
import TeamMenu from '../components/Team/TeamMenu';

const CardImage = styled.figure`
  margin: 0;
  top: 0;
  position: absolute;
  width: 80%;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  left: -8px;
`;

export const TeamPageTemplate = ({ content, contentComponent, data }) => {
  const MemberContent = contentComponent || Content;
  const { name, position, about } = data;

  return (
    <div>
      <PageHelmet titleTemplate="%s | Blog" title={name} description={about} />
      <TeamHeader />
      <Section py={0} background="rgba(20, 54, 76, 0.05)">
        <Container>
          <Row>
            <Column col="is-3" position="relative">
              <Box position="relative" height="100%" pr={3}>
                <TeamMenu />
                <Box
                  position="absolute"
                  height="100%"
                  boxShadow="2px 0 0 0 rgba(36, 185, 157, 0.05)"
                  backgroundColor="rgba(23, 128, 114, 0.1)"
                  width="1px"
                  top={0}
                  right={0}
                />
              </Box>
            </Column>
            <Column col="is-9" py={7}>
              <Row>
                <Column col="is-4">
                  <Box p={3} position="relative" maxWidth={240} m="auto">
                    <Box>
                      <PreviewCompatibleImage imageInfo={{ image: teambg }} />
                    </Box>
                    <Box
                      position="absolute"
                      top="57%"
                      width="100%"
                      left={0}
                      textAlign="center"
                      color={theme.color.white}
                    >
                      <Paragraph>
                        {data.name}
                      </Paragraph>
                      <Paragraph fontSize={[1, 1, 2]}>
                        {data.position}
                      </Paragraph>
                    </Box>
                    <CardImage>
                      <PreviewCompatibleImage imageInfo={data.profileImage} />
                    </CardImage>
                  </Box>
                </Column>
                <Column col="is-8">
                  <Heading fontSize={[3, 3, 4]} mb={0} pb={0}>
                    <FormattedMessage id="team:about" defaultMessage="About" />
                  </Heading>
                  <hr />
                  <Box className="content">
                    <MemberContent content={content} />
                  </Box>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TeamPageTemplate content={post.html} contentComponent={HTMLContent} data={post.frontmatter} />
  );
};

export default TeamPage;

export const pageQuery = graphql`
  query TeamMemberByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        position
        linkedin
        twitter
        about
        profileImage {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
