import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { FormattedMessage } from 'react-intl';
import { kebabCase } from 'lodash';
import CustomLink from '../Atoms/CustomLink';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import Paragraph from '../Atoms/Paragraph';
import theme from '../../styles/theme';
import Box from '../Atoms/Box';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Row multi>
        {posts && posts.map(({ node: post }) => (
          <Column col="is-12">
            <Box width="100%" key={post.id} borderBottom={`1px solid ${theme.color.midGray}`} pb={[3, 3, 4]}>
              <article>
                <CustomLink to={post.fields.slug}>
                  <Paragraph fontSize={[3, 3, 4]} pb={[1, 1, 2]}>
                    {post.frontmatter.title}
                  </Paragraph>
                </CustomLink>
                <Paragraph pb={[3, 3, 4]}>
                  {post.excerpt}
                </Paragraph>
                <Paragraph fontSize={1} color={theme.color.greyish} pb={[1, 1, 2]}>
                  <FormattedMessage
                    id="blog:button.author"
                    defaultMessage="Posted by {author} on {date}"
                    values={{
                      author: post.frontmatter.author || 'Plutux',
                      date: post.frontmatter.date,
                    }}
                  />
                </Paragraph>
                <Box className="tags">
                  {post.frontmatter.tags && post.frontmatter.tags.map(tag => (
                    <CustomLink className="tag is-link" to={`/tags/${kebabCase(tag)}/`}>
                      {tag}
                    </CustomLink>
                  ))}
                </Box>
                {/* <CustomLink to={post.fields.slug}> */}
                {/*  <FormattedMessage id="blog:button.readmore" defaultMessage="Read More" /> */}
                {/* </CustomLink> */}
              </article>
            </Box>
          </Column>
        ))}
      </Row>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                author
                date(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
