import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import TeamMenuUI from './TeamMenuUI';

const teamQuery = graphql`
  query TeamMenuQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "team-page" }} }
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

class TeamMenu extends React.PureComponent {
  render() {
    return (
      <StaticQuery
        query={teamQuery}
        render={(data, count) => <TeamMenuUI data={data} count={count} {...this.props} />}
      />
    );
  }
}

export default TeamMenu;
