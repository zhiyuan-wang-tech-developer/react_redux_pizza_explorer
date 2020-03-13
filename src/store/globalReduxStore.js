import { createStore } from 'redux'
import reducer from './reducer'

// To connect the global store with the Redux DevTools for Chrome
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/** 
 * Create a global redux store 
 */ 
// enhancer adds the Redux DevTools extension to your redux store
const global_store = createStore(reducer, enhancer)

export default global_store;