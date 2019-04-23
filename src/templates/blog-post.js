import React, { Fragment } from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import Content, { HTMLContent } from '../components/Content';
import CustomLink from '../components/Atoms/CustomLink';
import Box from '../components/Atoms/Box';
import Section from '../components/Atoms/Section';
import BlogHeader from '../components/Blog/BlogHeader';
import Container from '../components/Atoms/Container';
import Row from '../components/Atoms/Row';
import Column from '../components/Atoms/Column';
import FlexBox from '../components/Atoms/FlexBox';
import Paragraph from '../components/Atoms/Paragraph';
import theme from '../styles/theme';
import Heading from '../components/Atoms/Heading';
import { PageHelmet } from '../components/PageHelmet';

export const BlogPostTemplate = ({
  content, contentComponent, description = '', tags, title, author, date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <PageHelmet titleTemplate="%s | Blog" title={title} description={description} />
      <BlogHeader />
      <Section>
        <Container>
          <Row>
            <Column col="is-10 is-offset-1">
              {/* blog post header */}
              <Box pb={[1, 1, 2]} mb={[3, 3, 4]} borderBottom={`1px solid ${theme.color.midGray}`}>
                <Heading fontSize={[5, 5, 6]} fontWeight={600} pb={[1, 1, 2]}>{title}</Heading>
                <Paragraph fontSize={1} color={theme.color.greyish}>
                  <FormattedMessage
                    id="blog:button.author"
                    defaultMessage="Posted by {author} on {date}"
                    values={{
                      author: author || 'Plutux',
                      date,
                    }}
                  />
                </Paragraph>
              </Box>
              {/* blog post content */}
              <div className="content">
                <PostContent content={content} />
              </div>
              {/* blog post footer */}
              {tags && tags.length > 0 && (
              <FlexBox pt={5} justifyContent="flex-start" color={theme.color.greyish}>
                <Box as="span" mr={2}>
                  <FormattedMessage id="blog:tag" defaultMessage="Topics:" />
                </Box>
                <Box className="tags">
                  {tags.map(tag => (
                    <CustomLink className="tag is-link" to={`/tags/${kebabCase(tag)}/`}>
                      {tag}
                    </CustomLink>
                  ))}
                </Box>
              </FlexBox>
              )}
            </Column>
          </Row>
        </Container>
      </Section>
    </>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      author={post.frontmatter.author}
    />
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
      }
    }
  }
`;
