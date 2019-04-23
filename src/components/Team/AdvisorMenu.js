import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import TeamMenuUI from './TeamMenuUI';

const advisorQuery = graphql`
  query AdvisorMenuQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "advisor-page" }} }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            name
            position
          }
        }
      }
    }
  }
`;

class AdvisorMenu extends React.PureComponent {
  render() {
    return (
      <StaticQuery
        query={advisorQuery}
        render={(data, count) => <TeamMenuUI data={data} count={count} {...this.props} />}
      />
    );
  }
}

export default AdvisorMenu;
