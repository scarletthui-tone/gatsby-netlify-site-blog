import React from 'react';
import { Provider } from 'mobx-react';
import UIStore from './src/store/UIStore';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider uiStore={new UIStore()}>{element}</Provider>;
