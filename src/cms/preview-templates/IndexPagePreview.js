import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);

  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <IndexPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      mainpitch={{
        title: entry.getIn(['data', 'mainpitch', 'title']),
        description: entry.getIn(['data', 'mainpitch', 'description']),
      }}
      intro={{ blurbs }}
    />
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
