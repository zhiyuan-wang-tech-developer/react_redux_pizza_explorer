const initialState = [
    {
        id: 1,
        name: 'Pizza Margarita',
        description: 'Minimalism id key!'
    },
    {
        id: 2,
        name: "Pizza Napoletana",
        description: "Like Margarita, but without the basil."
    },
    {
        id: 3,
        name: "Pizza Bianca",
        description: "Did somebody say oil?"
    }
]

function pizzaListReducer(state = initialState, action) {
    switch (action.type) {
        // case 'ADD_PIZZA' updates the redux state array
        case 'ADD_PIZZA': {
            const updated_state = [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description
                }
            ]
            console.log('@pizzaListReducer - updated state array: ', updated_state)
            return updated_state
        }

        default: {
            return state
        }
    }
}

export default pizzaListReducer