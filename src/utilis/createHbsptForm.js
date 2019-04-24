import { useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { metaQuery } from './getMetaData';

export const createHbsptForm = ({ id }) => {
  const { site } = useStaticQuery(metaQuery);
  const hs = site.siteMetadata.hubspot;
  console.log('createForm');
  const createForm = () => {
    if (window.hbspt) {
      console.log('hs ready');

      window.hbspt.forms.create({
        portalId: hs.portalID,
        formId: hs.form.contact,
        target: `#${id}`,
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
    } else {
      console.log('hs not ready');
      setTimeout(createForm, 1);
    }
  };

  useEffect(createForm, []);

  return (
    <>
      <Helmet>
        <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js" />
      </Helmet>
      <div id={id} />
    </>
  );
};
