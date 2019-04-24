import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { FormattedMessage } from 'react-intl';
import { kebabCase } from 'lodash';
import CustomLink from '../Atoms/CustomLink';
import Row from '../Atoms/Row';
import Column from '../Atoms/Column';
import Paragraph from '../Atoms/Paragraph';
import theme from '../../styles/theme';
import Box from '../Atoms/Box';
import { metaQuery } from '../../utilis/getMetaData';

class FormUI extends React.Component {
  componentDidMount() {
    const { data } = this.props;
    const { hubspot } = data.site;

    console.log('?');

    if (typeof hbspt !== 'undefined') {
      console.log('?');
      hbspt.forms.create({
        portalId: hubspot.portalID,
        formId: hubspot.form.contact,
        target: '#contact-form',
        css: '',
        onFormSubmit: () => {
          // if (typeof fbq === 'function') {
          //   fbq('track', 'Lead', { content_name: 'Content Form', content_category: 'Form' });
          // } else {
          //   console.debug('fbq', 'track', 'Lead', {
          //     content_name: 'Content Form',
          //     content_category: 'Form',
          //   });
          // }
        },
      });
    }
  }

  render() {
    return (
      <div id="contact-form" />
    );
  }
}

const ContactForm = () => (
  <StaticQuery
    query={metaQuery}
    render={data => <FormUI data={data} />}
  />
);

export default ContactForm;
