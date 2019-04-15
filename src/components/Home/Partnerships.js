import React, { PureComponent } from 'react';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Column from '../Atoms/Column';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import theme from '../../styles/theme';
import Paragraph from '../Atoms/Paragraph';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import FlexBox from '../Atoms/FlexBox';

const PartnershipItem = ({ title, icon }) => (
  <Column col="is-6" my={[3, 3, 4, 4]}>
    <FlexBox flexWrap="nowrap" justifyContent="flex-start">
      <FlexBox background={theme.color.white} width={60} height={60} borderRadius="50%" mr={3}>
        <PreviewCompatibleImage imageInfo={icon} />
      </FlexBox>
      <Paragraph color={theme.color.white} fontWeight={400} fontSize={[1, 2, 2, 2, 2]} m={0}>
        {title}
      </Paragraph>
    </FlexBox>
  </Column>
);

class Partnerships extends PureComponent {
  render() {
    const { heading, list } = this.props;

    return (
      <Section id="partnerships" py={7} background={theme.color.darkBlue}>
        <Container>
          <Row>
            <Column>
              <Heading uppercase textAlign="center" pb={4} color={theme.color.white}>
                {heading}
              </Heading>
            </Column>
          </Row>
          <Row alignItems="center" justifyContent="center">
            <Column col="is-9">
              <Row multi>
                {list.map((item, index) => (
                  <PartnershipItem key={index} {...item} />
                ))}
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Partnerships;
