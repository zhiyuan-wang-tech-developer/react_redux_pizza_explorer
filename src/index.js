import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// Import Provider component
import { Provider } from 'react-redux'
// Import Redux Store
import global_store from './store/globalReduxStore'

// Tell React where the Redux store is.
// Wrap App component within Provider component.
// Every time the Redux store changes, React updates.
/**
 * Integrate the redux store with the react app by react-redux
 */
ReactDOM.render(
    <Provider store={global_store}>
        <App />
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();