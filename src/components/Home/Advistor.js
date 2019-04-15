import React, { Fragment } from 'react';
import styled from 'styled-components';

import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Column from '../Atoms/Column';
import Section from '../Atoms/Section';
import Button from '../Atoms/Button';
import { pageUrls } from '../../config/pageSetting';
import Box from '../Atoms/Box';
import CustomLink from '../Atoms/CustomLink';
import AdvisorList from './Advistor/AdvistorList';

const StyledHeading = styled(Heading)`
  text-transform: uppercase
`;

class Advistor extends React.PureComponent {
  render() {
    const { heading, content } = this.props;

    return (
      <Section id="team" py={[5, 5, 7]} mb={6}>
        <Container pt={[50, 60, 0]} position="relative">
          {/* <CellBackground src={`${E_ASSET_PREFIX}/static/images/home/bg_cell_1.svg`} alt="" width={56} height={166} left={['-1%', '-8%', '8%', '-2%']} top={['-2%', '-12%', '-32%', '-52%']} /> */}
          <Row>
            <Column>
              <StyledHeading>
                {heading}
              </StyledHeading>
            </Column>
          </Row>
          <AdvisorList />
          <Row>
            <Column>
              <Box py={4} textAlign="center">
                <CustomLink to={pageUrls.team.url}>
                  <Button primary text="viewAll" />
                </CustomLink>
              </Box>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Advistor;
