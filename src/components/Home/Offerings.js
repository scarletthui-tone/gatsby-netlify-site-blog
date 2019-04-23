import React from 'react';
import styled from 'styled-components';
import Container from '../Atoms/Container';
import Heading from '../Atoms/Heading';
import Row from '../Atoms/Row';
import Section from '../Atoms/Section';
import Paragraph from '../Atoms/Paragraph';
import Column from '../Atoms/Column';
import theme from '../../styles/theme';
import FlexBox from '../Atoms/FlexBox';
import Box from '../Atoms/Box';

const StyledFlexBox = styled(FlexBox)`
  background-color: rgba(185, 200, 221, 0.4);
  border-radius: 4px;
`;

const TitleBlock = styled(Box)`
  width: 165px;
  position: relative;
  min-height: 48px;
  &:before {
    content:'';
    float: left;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 24px 20px 24px 0;
    border-color: transparent rgb(20, 54, 76) transparent transparent;
    top: 0;
    left: -20px;
    position: absolute;
  }
  &:after {
    content:'';
    float: right;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 24px 0 24px 20px;
    border-color: transparent transparent transparent rgb(20, 54, 76);
    top: 0;
    right: -20px;
    position: absolute;
  }
`;

class Offerings extends React.Component {
  render() {
    const {
      heading, content, list,
    } = this.props;

    return (
      <Section id="offerings" py={7} position="relative">
        <Container>
          <Row>
            <Column>
              <Heading uppercase pb={1} textAlign="center">
                {heading}
              </Heading>
            </Column>
          </Row>
          <Row>
            <Column>
              <Paragraph pb={2}>
                {content}
              </Paragraph>
            </Column>
          </Row>
          <Row>
            <Column>
              <StyledFlexBox alignItems="stretch" py={3}>
                {list.map(category => (
                  <Column >
                    <FlexBox width="100%" height="100%" flexDirection="column">
                      <Box width="100%" textAlign="center" zIndex={1}>
                        <TitleBlock
                          background={theme.color.darkBlue}
                          py={2}
                          m="auto"
                        >
                          <Paragraph
                            textAlign="center"
                            color={theme.color.white}
                          >
                            {category.title}
                          </Paragraph>
                        </TitleBlock>
                      </Box>
                      <Box width="100%" flex={1} background={theme.color.white} borderRadius={4} p={3} pt={4} mt={-24} boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 4px 0px">
                        {category.items.map(item => (
                          <Paragraph textAlign="center" width="100%" py={2} borderBottom="1px solid rgba(185, 200, 221, 0.4)">
                            {item}
                          </Paragraph>
                        ))}
                      </Box>
                    </FlexBox>
                  </Column>
                ))}
              </StyledFlexBox>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Offerings;
