import React from 'react';
import { Provider } from 'mobx-react';
import { addLocaleData, IntlProvider } from 'react-intl';
import UIStore from './src/store/UIStore';


const storeTag = '__MOBX_STORE__';

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

const wrapWithProvider = ({ element }) => {

  if (!window[storeTag]) {
    window[storeTag] = new UIStore();
  }
  console.log(window[storeTag]);
  return (
    <Provider uiStore={window[storeTag]}>
      <IntlProvider locale={window[storeTag].lang} initialNow={Date.now()}>
        {element}
      </IntlProvider>
    </Provider>
  );
};

export default wrapWithProvider;
