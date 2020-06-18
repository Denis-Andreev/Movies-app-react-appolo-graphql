import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from 'react-apollo'
import ApolloClient from "apollo-boost";
import {Provider} from "react-redux";
import store from './store/store';

import './index.css';
import App from './App';

const client = new ApolloClient({
    uri: "http://localhost:3005/graphql"
})

window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);