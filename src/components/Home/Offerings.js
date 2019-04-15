import React from 'react';
import styled from 'styled-components';
import Container from '../Atoms/Container';
import Heading from '../Atoms/Heading';
import Row from '../Atoms/Row';
import Section from '../Atoms/Section';
import Paragraph from '../Atoms/Paragraph';
import Column from '../Atoms/Column';

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
            {list.map(category => (
              <Column>
                <Paragraph textAlign="center">
                  {category.title}
                </Paragraph>
                {category.items.map(item => (
                  <Paragraph textAlign="center">
                    {item}
                  </Paragraph>
                ))}
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Offerings;
