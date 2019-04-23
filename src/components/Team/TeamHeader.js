import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import Section from '../Atoms/Section';
import Container from '../Atoms/Container';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import Heading from '../Atoms/Heading';

import theme from '../../styles/theme';

export default class TeamHeader extends React.Component {
  render() {
    return (
      <Section pt={8} pb={6} background={theme.color.blackBlue}>
        <Container>
          <Row>
            <Column>
              <Heading color={theme.color.white}>
                <FormattedMessage id="team:title" defaultMessage="Team" />
              </Heading>
            </Column>
          </Row>
          <Row />
        </Container>
      </Section>
    );
  }
}
