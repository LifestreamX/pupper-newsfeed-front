import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Redux
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers/Index';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// REDUXTOOLKIT
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
