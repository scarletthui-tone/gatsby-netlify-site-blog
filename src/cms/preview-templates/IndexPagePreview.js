import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {

  return (
    <IndexPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      hero={entry.getIn(['data', 'hero'])}
      intro={entry.getIn(['data', 'intro'])}
      offerings={entry.getIn(['data', 'offerings'])}
      products={entry.getIn(['data', 'products'])}
      team={entry.getIn(['data', 'team'])}
      advisors={entry.getIn(['data', 'advisors'])}
      investors={entry.getIn(['data', 'investors'])}
      partnerships={entry.getIn(['data', 'partnerships'])}
      hiring={entry.getIn(['data', 'hiring'])}
    />
  );
};

export default IndexPagePreview;
