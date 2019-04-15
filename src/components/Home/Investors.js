import React, { PureComponent } from 'react';
import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Column from '../Atoms/Column';
import Row from '../Atoms/Row';
import Heading from '../Atoms/Heading';
import Box from '../Atoms/Box';
import CustomLink from '../Atoms/CustomLink';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

class Investors extends PureComponent {
  render() {
    const { heading, list } = this.props;

    return (
      <Section id="investor" py={7}>
        <Container>
          <Row>
            <Column>
              <Heading uppercase textAlign="center" pb={4}>
                {heading}
              </Heading>
            </Column>
          </Row>
          <Row multi alignItems="center" justifyContent="center">
            {list.map(({ title, img, url }) => (
              <Column col="is-4">
                <CustomLink to={url}>
                  <Box>
                    <PreviewCompatibleImage imageInfo={img} />
                  </Box>
                </CustomLink>
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Investors;
