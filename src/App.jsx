import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Authenticate from './components/authenticate';
// Import other components as needed
// import Home from './components/Home';
// import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>
      <Authenticate />
    </Provider>
  );
}

export default App;
