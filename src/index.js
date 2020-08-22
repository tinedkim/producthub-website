import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { checkLoggedIn } from "./utils/session";

import { PersistGate } from 'redux-persist/integration/react'


const renderApp = preloadedState => {
  const ps = configureStore(preloadedState);
  const store = ps.store;
  const persistor = ps.persistor;
  window.state = store.getState; // FOR DEBUGGING

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
};


(async () => renderApp(await checkLoggedIn()))();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
