import React from 'react';
import CMS from 'netlify-cms';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import TeamPagePreview from './preview-templates/TeamPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

class StyledComponentWrapper extends React.Component {
  render() {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;

    return (
      <StyleSheetManager target={iframeHeadElem}>
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </StyleSheetManager>
    );
  }
}

CMS.registerPreviewTemplate('homes', props => (
  <StyledComponentWrapper>
    <IndexPagePreview {...props} />
  </StyledComponentWrapper>
));

CMS.registerPreviewTemplate('blog', props => (
  <StyledComponentWrapper>
    <BlogPostPreview {...props} />
  </StyledComponentWrapper>
));

CMS.registerPreviewTemplate('team', props => (
  <StyledComponentWrapper>
    <TeamPagePreview {...props} />
  </StyledComponentWrapper>
));

CMS.registerPreviewTemplate('advisors', props => (
  <StyledComponentWrapper>
    <TeamPagePreview {...props} />
  </StyledComponentWrapper>
));

