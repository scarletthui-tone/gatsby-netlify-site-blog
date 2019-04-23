import { Helmet } from 'react-helmet';
import React from 'react';

export const PageHelmet = ({ title, description = '', titleTemplate}) => {
  return (
      <Helmet titleTemplate={titleTemplate || '%s'}>
        <meta charSet="utf-8" />
        <title>{title || ''}</title>
        <meta name="description" content={description || ''} />
      </Helmet>
  );
};
