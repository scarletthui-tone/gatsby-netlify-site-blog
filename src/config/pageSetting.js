import { FormattedMessage } from 'react-intl';
import React from 'react';

export const pageUrls = {
  home: {
    url: '/',
    title: <FormattedMessage id="pageUrl:home" defaultMessage="Home" />
  },
  about: {
    url: '/about',
    title: <FormattedMessage id="pageUrl:about" defaultMessage="About Us" />
  },
  corporateProfile: {
    url: '/about/corporate-profile',
    title: <FormattedMessage id="pageUrl:corporateProfile" defaultMessage="Corporate Profile" />
  },
  ourBusiness: {
    url: '/about/our-business',
    title: <FormattedMessage id="pageUrl:ourBusiness" defaultMessage="Our Business" />
  },
  investor: {
    url: '/investor',
    title: <FormattedMessage id="pageUrl:investor" defaultMessage="Investor Relations" />
  },
  contact: {
    url: '/contact',
    title: <FormattedMessage id="pageUrl:contact" defaultMessage="Contact Us" />
  },
  announcements: {
    url: '/announcements',
    title: <FormattedMessage id="pageUrl:announcements" defaultMessage="Company Announcements" />
  },
  news: {
    url: '/news',
    title: <FormattedMessage id="pageUrl:news" defaultMessage="News & Events" />
  },
  tag: {
    url: '/tag',
    title: <FormattedMessage id="pageUrl:tag" defaultMessage="Tag" />
  },
}
