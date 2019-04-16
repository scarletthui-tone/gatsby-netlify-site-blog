import React from 'react';
import CMS from 'netlify-cms';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import InvestorPagePreview from './preview-templates/InvestorPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

class StyledComponenetWrapper extends React.Component {
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
  <StyledComponenetWrapper>
    <IndexPagePreview {...props} />
  </StyledComponenetWrapper>
));
// CMS.registerPreviewTemplate('homes', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('investor', InvestorPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
