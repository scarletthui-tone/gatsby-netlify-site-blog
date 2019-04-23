import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PerfectScrollbar from 'perfect-scrollbar';

import Box from '../Atoms/Box';
import Paragraph from '../Atoms/Paragraph';
import theme from '../../styles/theme';

const MemberItem = styled(Box)`
  &:hover, &.active {
    background-color: ${props => props.theme.color.white};
  }
`;

class TeamMenuUI extends React.PureComponent {
  id = 'menu-scroller';

  scrollbar;

  componentDidMount() {
    this.scrollbar = new PerfectScrollbar(`#${this.id}`);
    const container = document.querySelector(`#${this.id}`);
  }

  render() {
    const { data, currSlug } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <Box overflowHidden position="relative" height="100%" maxHeight={700}>
        <Box position="relative" width="100%" height="100%" pr={4} id={this.id}>
          {edges && edges.map(edge => (
            <Link to={edge.node.fields.slug} key={edge.node.id}>
              <MemberItem my={3} p={2} className={currSlug === edge.node.fields.slug ? 'active' : ''}>
                <Paragraph fontWeight={400} color={theme.color.darkBlue}>
                  {console.log(edge.node.fields.slug)}
                  {edge.node.frontmatter.name}
                </Paragraph>
                <Paragraph fontSize={[1, 1, 2]} color={theme.color.darkBlue}>
                  {edge.node.frontmatter.position}
                </Paragraph>
              </MemberItem>
            </Link>
          ))}
        </Box>
      </Box>
    );
  }
}

export default TeamMenuUI;
