import React from 'react';
import { Provider } from 'mobx-react';
import UIStore from './src/store/UIStore';


const wrapWithProvider = ({ element }) => {
  return (
    <Provider uiStore={new UIStore()}>
        {element}
    </Provider>
  );
};

export default wrapWithProvider;
