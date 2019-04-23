import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Box from '../Atoms/Box';
import Paragraph from '../Atoms/Paragraph';

const MemberItem = styled(Box)`
  &:hover, &.active {
    background-color: ${props => props.theme.color.white};
  }
`;

class TeamMenuUI extends Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <Box py={6}>
        {edges && edges.map(edge => (
          <MemberItem my={3} p={2} className="active">
            <Paragraph fontWeight={400}>
              {edge.node.frontmatter.name}
            </Paragraph>
            <Paragraph fontSize={[1, 1, 2]}>
              {edge.node.frontmatter.position}
            </Paragraph>
          </MemberItem>
        ))}
      </Box>
    );
  }
}

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
        render={(data, count) => <TeamMenuUI data={data} count={count} />}
      />
    );
  }
}

export default TeamMenu;
