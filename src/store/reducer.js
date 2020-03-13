// import the helper function 'combineReducers' from the 'redux' package to combine different reducers
import { combineReducers } from 'redux'

import pizzaListReducer from './pizzaListReducer'
import selectedPizzaReducer from './selectedPizzaReducer'

// root reducer
const reducer = combineReducers(
    {
        pizzaList: pizzaListReducer,
        selectedPizza: selectedPizzaReducer
    }
)

export default reducer