import React from 'react';

import Section from '../../components/Atoms/Section';
import Container from '../../components/Atoms/Container';
import Row from '../../components/Atoms/Row';
import Column from '../../components/Atoms/Column';

import BlogRoll from '../../components/Blog/BlogRoll';
import BlogIntro from '../../components/Blog/BlogIntro';
import BlogHeader from '../../components/Blog/BlogHeader';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <BlogHeader />
        <Section>
          <Container>
            <Row>
              <Column col="is-8">
                <BlogRoll />
              </Column>
              <Column col="is-4">
                <BlogIntro />
              </Column>
            </Row>
          </Container>
        </Section>
      </>
    );
  }
}
