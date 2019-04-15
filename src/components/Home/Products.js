import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Column from '../Atoms/Column';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import theme from '../../styles/theme';
import Paragraph from '../Atoms/Paragraph';
import Box from '../Atoms/Box';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import FlexBox from '../Atoms/FlexBox';


const ProductRow = ({
  title, content, img, list,
}) => (
  <Row py={3} position="relative">
    <Column>
      <FlexBox p={7} borderRadius={4} background={theme.color.white}>
        <Box width="50%">
          <Heading color={theme.color.tealish}>
            {title}
          </Heading>
          <Paragraph fontWeight={400} pb={3}>
            {content}
          </Paragraph>
          {list.map(item => (
            <FlexBox flexWrap="nowrap" justifyContent="flex-start" alignItems="baseline" pb={2}>
              <Box as="span" borderRadius="50%" background={theme.color.darkBlue} minWidth={6} height={6} mr={2} />
              <Paragraph fontSize={1}>
                {item}
              </Paragraph>
            </FlexBox>
          ))}
        </Box>
        <Box width="50%">
          <PreviewCompatibleImage imageInfo={img} />
        </Box>
      </FlexBox>
    </Column>
  </Row>
);

const ProductRowWithFlowImage = ({
  title, content, img, imgOnRight, imgOnLeft, imgTop, imgWidth,
}) => (
  <Row py={3} position="relative">
    <Column>
      <FlexBox p={7} borderRadius={4} background={theme.color.white}>
        {imgOnLeft && (
          <Box width={[0, 0, 200]} />
        )}
        <Box flex={1}>
          <Heading color={theme.color.tealish}>
            {title}
          </Heading>
          <Paragraph fontWeight={400}>
            {content}
          </Paragraph>
        </Box>
        {imgOnRight && (
          <Box width={[0, 0, 120]} />
        )}
      </FlexBox>
    </Column>
    <Box
      position="absolute"
      top={imgTop}
      right={imgOnRight ? [0, 0, -140, -50, -130] : 'auto'}
      left={imgOnLeft ? [0, 0, -140, -120, -130] : 'auto'}
      width={[0, 0, 340, 350, 400]}
      zIndex={1}
    >
      <PreviewCompatibleImage imageInfo={img} />
    </Box>
  </Row>
);

class Products extends PureComponent {
  render() {
    const { heading, products } = this.props;

    return (
      <Section id="products" py={7} background={theme.color.darkBlue}>
        <Container>
          <Row>
            <Column>
              <Heading uppercase textAlign="center" color={theme.color.white}>
                {heading}
              </Heading>
            </Column>
          </Row>
          <ProductRowWithFlowImage {...products[0]} imgTop={[0, 0, 10, 0, -80]} imgOnRight />
          <ProductRowWithFlowImage {...products[1]} imgTop={[0, 0, 50, 50, 70]} imgOnLeft />
          <ProductRowWithFlowImage {...products[2]} imgTop={[0, 0, 70, 20, 20]} imgOnRight />
          <ProductRow {...products[3]} imgTop={[0, 0, 10, 0, -80]} />
        </Container>

      </Section>
    );
  }
}

export default Products;
