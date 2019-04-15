import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Row from '../../Atoms/Row';
import Column from '../../Atoms/Column';
import TeamCard from './TeamCard';

const ListBackground = styled.div.attrs({ className: 'd-none d-lg-flex' })`
  position: absolute;
  width: 100%;
  height: 80%;
  left: 0;
  background-color: ${props => props.theme.color.blackBlue};
  transform: skewY(-6deg);
  transform-origin: 100% 50%;
  z-index: -1;
`;

class TeamListUI extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { edges: members } = data.allMarkdownRemark;

    return (
      <Row justifyContent="center" position="relative">
        <ListBackground />
        <Column col="is-10" py={4}>
          <Row multi justifyContent="center">
            {members
              && members.map(({ node: member }) => (
                <Column key={member.id} col="is-3">
                  <TeamCard url={member.fields.slug} data={member.frontmatter} />
                </Column>
              ))}
          </Row>
        </Column>
      </Row>
    );
  }
}

const teamQuery = graphql`
  query TeamAtHomePageQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "team-page" }, onHomepage: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            name
            img {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            position
            linkedin
            twitter
          }
        }
      }
    }
  }
`;

class TeamList extends React.PureComponent {
  render() {
    return (
      <StaticQuery
        query={teamQuery}
        render={(data, count) => <TeamListUI data={data} count={count} />}
      />
    );
  }
}

export default TeamList;
