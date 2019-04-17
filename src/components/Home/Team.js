import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';
import Column from '../Atoms/Column';
import Section from '../Atoms/Section';
import TeamList from './Team/TeamList';
import Button from '../Atoms/Button';
import { pageUrls } from '../../config/pageSetting';
import Box from '../Atoms/Box';

class Team extends React.PureComponent {
  render() {
    const { heading, content } = this.props;

    return (
      <Section id="team" py={7}>
        <Container pt={[50, 60, 0]} position="relative">
          {/* <CellBackground src={`${E_ASSET_PREFIX}/static/images/home/bg_cell_1.svg`} alt="" width={56} height={166} left={['-1%', '-8%', '8%', '-2%']} top={['-2%', '-12%', '-32%', '-52%']} /> */}
          <Row>
            <Column>
              <Heading uppercase>
                {heading}
              </Heading>
              <Paragraph>
                {content}
              </Paragraph>
            </Column>
          </Row>
          <TeamList />
          <Row>
            <Column>
              <Box py={4} textAlign="center">
                <Link to={pageUrls.team.url}>
                  <Button primary text="viewAll" />
                </Link>
              </Box>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Team;
