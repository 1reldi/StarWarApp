import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Navigation from './navigation';
import rootReducer from './store';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
