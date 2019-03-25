import { Helmet } from 'react-helmet';
import React from 'react';

export const PageHelmet = ({ title, description = '' }) => {
  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || ''}</title>
        <meta name="description" content={description || ''} />
      </Helmet>
  );
};
