import React, { Fragment } from 'react';
import styled from 'styled-components';

import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';
import Column from '../Atoms/Column';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Section from '../Atoms/Section';

const StyledHeading = styled(Heading)`
  text-transform: uppercase
`;

class Introduction extends React.PureComponent {
  render() {
    const {
      heading, content, img,
    } = this.props;

    return (
      <Section id="exchange" py={[5, 5, 7]}>
        <Container pt={[50, 60, 0]} position="relative">
          {/* <CellBackground src={`${E_ASSET_PREFIX}/static/images/home/bg_cell_1.svg`} alt="" width={56} height={166} left={['-1%', '-8%', '8%', '-2%']} top={['-2%', '-12%', '-32%', '-52%']} /> */}
          <Row justifyContent="center">
            <Column col="is-6">
              <StyledHeading>
                {heading}
              </StyledHeading>
              <Paragraph fontSize={[1, 1, 2]}>
                {content}
              </Paragraph>
            </Column>
            <Column col="is-6">
              <PreviewCompatibleImage imageInfo={img} />
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Introduction;
