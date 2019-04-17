import React, { PureComponent } from 'react';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Column from '../Atoms/Column';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';
import Box from '../Atoms/Box';

class Hiring extends PureComponent {
  render() {
    const {
      heading, content, link, linkText,
    } = this.props;

    return (
      <Section id="hiring" py={7}>
        <Container>
          <Row>
            <Column>
              <Heading uppercase textAlign="center" pb={2}>
                {heading}
              </Heading>
            </Column>
          </Row>
          <Row alignItems="center" justifyContent="center">
            <Column col="is-9">
              <Paragraph textAlign="center">
                <Box as="span" mr={2}>{content}</Box>
                <a href={link}>{linkText}</a>
              </Paragraph>
            </Column>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Hiring;
