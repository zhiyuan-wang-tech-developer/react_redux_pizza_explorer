// 'null' means no pizza is selected initially.
const initialState = null

function selectedPizzaReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_PIZZA': {
            return action.payload
        }

        case 'UNSELECT_PIZZA': {
            return null
        }
    
        default: {
            return state
        }
    }
}

export default selectedPizzaReducer