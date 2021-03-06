import React, { Fragment } from 'react';
import styled from 'styled-components';

import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';
import Column from '../Atoms/Column';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Section from '../Atoms/Section';

import theme from '../../styles/theme';

import ArrowIcon from '../../img/arrow.svg';
import Logo from '../../img/logo.svg';
import Box from '../Atoms/Box';

const BlueBackground = styled.div`
  background-image: linear-gradient(0deg, #14364c, #1d4f74);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  transform-origin: 100% 50%;
  transform: skewY(9deg);
  width: 100%;
  height: 110%;
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Whiteliners = styled.span`
  position: absolute;
  background-image: url('/img/home/hero-left.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  width: 100%;
  height: 100%;
  left: 0;
`;

const SuggestScrollIcon = styled.div`
  @keyframes notice {
      from  {transform: translate3d(0,0,0)}
      to {transform: translate3d(0,7px,0)}
  }
  margin: auto;
  width: 32px;
  height: 32px;
  animation-name: notice;
  animation-duration: 700ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;
  img {
      transform: rotate(90deg);
  }
`;

const HeroHeading = styled(Heading)`
  color: white;
  text-shadow: 4px 4px 0 rgba(23,128,114,0.6);
  font-weight: 600;
`;

class Hero extends React.PureComponent {
  render() {
    const {
      title, description, comingDate, banner,
    } = this.props;

    return (
      <Section className="hero" id="hero" p={0} pt={5} position="relative">
        <BlueBackground>
          <Whiteliners />
        </BlueBackground>
        <div className="hero-body">
          <Container>
            <Row pt={[4, 4, 4, 4]} pb={7}>
              <Column col="is-6">
                <HeroHeading fontSize={[6, 7]} mt={[2, 2, 3]}>
                  {title}
                </HeroHeading>
                <Paragraph color={theme.color.white} fontWeight={400}>
                  {description}
                </Paragraph>
              </Column>
              <Column col="is-6">
                <PreviewCompatibleImage imageInfo={banner} />
              </Column>
            </Row>
            <Row pb={5}>
              <Column>
                <Paragraph color={theme.color.white} textAlign="center">
                  {comingDate}
                </Paragraph>
                <SuggestScrollIcon>
                  <PreviewCompatibleImage imageInfo={{ image: ArrowIcon }} />
                </SuggestScrollIcon>
              </Column>
            </Row>
          </Container>
        </div>
      </Section>
    );
  }
}

export default Hero;
