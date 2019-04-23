import { FormattedMessage } from 'react-intl';
import React from 'react';

export const pageUrls = {
  home: {
    url: '/',
    title: <FormattedMessage id="pageUrl:home" defaultMessage="Home" />,
  },
  offeringsSection: {
    url: '/#offerings',
    title: <FormattedMessage id="pageUrl:offerings" defaultMessage="Offerings" />,
  },
  teamSection: {
    url: '/#team',
    title: <FormattedMessage id="pageUrl:team" defaultMessage="Team" />,
  },
  productSection: {
    url: '/#product',
    title: <FormattedMessage id="pageUrl:product" defaultMessage="Product" />,
  },
  team: {
    url: '/team',
    title: <FormattedMessage id="pageUrl:team" defaultMessage="Team" />,
  },
  advisor: {
    url: '/advisors',
    title: <FormattedMessage id="pageUrl:advisor" defaultMessage="Advisor" />,
  },
  contact: {
    url: '/contact',
    title: <FormattedMessage id="pageUrl:contact" defaultMessage="Contact Us" />,
  },
  blog: {
    url: '/blog',
    title: <FormattedMessage id="pageUrl:blog" defaultMessage="Blog" />,
  },
  news: {
    url: '/news',
    title: <FormattedMessage id="pageUrl:news" defaultMessage="News & Events" />,
  },
  tag: {
    url: '/tag',
    title: <FormattedMessage id="pageUrl:tag" defaultMessage="Tag" />,
  },
};
