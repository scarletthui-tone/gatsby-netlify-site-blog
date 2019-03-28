import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import InvestorPagePreview from './preview-templates/InvestorPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('homes', IndexPagePreview);
CMS.registerPreviewTemplate('home', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('investor', InvestorPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
