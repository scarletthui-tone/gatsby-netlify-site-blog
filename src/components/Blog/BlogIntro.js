import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';

export default class BlogIntro extends React.PureComponent {
  render() {
    return (
      <Row>
        <Column>
          <Heading>
            <FormattedMessage id="blog:title" defaultMessage="Plutux Blog" />
          </Heading>
          <Paragraph>
            <FormattedMessage id="blog:intro" defaultMessage="Regular updates and research findings from the Plutux Team to help you understand more about our vision, team, and product." />
          </Paragraph>
        </Column>
      </Row>
    );
  }
}
