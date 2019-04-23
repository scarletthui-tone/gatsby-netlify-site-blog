import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import Heading from '../Atoms/Heading';

import theme from '../../styles/theme';
import Box from '../Atoms/Box';
import { pageUrls } from '../../config/pageSetting';

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 100ms ease-in;
  &:hover, &.active {
    border-color: ${props => props.theme.color.white};
  }
`;

export default class TeamHeader extends React.Component {
  render() {
    const { isAdvisor } = this.props;

    return (
      <Section pt={8} pb={6} background={theme.color.blackBlue}>
        <Container>
          <Row>
            <Column>
              <Link to={pageUrls.team.url}>
                <Box as="span" px={2} mr={4}>
                  <StyledHeading color={theme.color.white} pb={0} className={!isAdvisor ? 'active' : ''}>
                    <FormattedMessage id="team:title.team" defaultMessage="Team" />
                  </StyledHeading>
                </Box>
              </Link>
              <Link to={pageUrls.advisor.url}>
                <Box as="span" px={2}>
                  <StyledHeading color={theme.color.white} pb={0} className={isAdvisor ? 'active' : ''}>
                    <FormattedMessage id="team:title.advisor" defaultMessage="Advisor" />
                  </StyledHeading>
                </Box>
              </Link>
            </Column>
          </Row>
          <Row />
        </Container>
      </Section>
    );
  }
}
