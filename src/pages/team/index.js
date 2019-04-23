import React from 'react';

import { graphql } from 'gatsby';
import  { TeamPageTemplate } from '../../templates/team-page';
import { HTMLContent } from '../../components/Content';

class TeamIndexPage extends React.Component {
  render() {
    const { allMarkdownRemark: posts } = this.props.data;

    const post = posts.edges[0].node;

    return (
      <TeamPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        data={post.frontmatter}
        currSlug={post.fields.slug}
      />
    );
  }
}

export default TeamIndexPage;

export const pageQuery = graphql`
  query FirstTeamMember {
    allMarkdownRemark(
      filter: { frontmatter: { 
        templateKey: { eq: "team-page" },
        order: { eq: 1 },
      } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            name
            order
            position
            linkedin
            twitter
            profileImg {
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
    }
  }
`;
