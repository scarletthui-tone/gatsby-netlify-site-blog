import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();

  return (
    <IndexPageTemplate {...data} />
  );
};

export default IndexPagePreview;
