import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      {...data}
    />
  );
};

export default BlogPostPreview;
