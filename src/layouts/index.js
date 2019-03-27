import React from 'react';
import Helmet from 'react-helmet';
import { addLocaleData, IntlProvider } from 'react-intl';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../components/all.scss';

import { useSiteMetadata } from '../utilis/helpers';
import { langList, DEFAULT_LANG } from '../config/langSetting';

const getIntlLocale = locale => require(`react-intl/locale-data/${locale}`);
const getMessages = locale => require(`../lang/${locale}.json`);

const messagesList = {};

langList.forEach(lang => {
  try {
    addLocaleData(getIntlLocale(lang));
    messagesList[lang] = getMessages(lang);
  } catch (e) {
    console.log(e);
  }
});

const TemplateWrapper = ({ children, pageContext, ...rest }) => {
  const { title, description } = useSiteMetadata();
  const lang = pageContext.lang || DEFAULT_LANG;

  return (
    <IntlProvider key={lang} locale={lang} messages={messagesList[lang]} initialNow={Date.now()}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar lang={lang}/>
        <div>{children}</div>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;
