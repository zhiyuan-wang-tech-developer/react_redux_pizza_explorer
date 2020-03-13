import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PizzaDetails extends React.Component {
    static propTypes = {
        selectedPizza: PropTypes.object.isRequired,
        unselectPizza: PropTypes.func.isRequired
    }

    closeClickHandler = () => {
        this.props.unselectPizza()
    }

    render() {
        const selected_pizza = this.props.selectedPizza
        if (!selected_pizza) {
            return (
                <p>Please select a pizza to view its details!</p>
            )
        }
        // selected_pizza is not null
        return (
            <div>
                <h2>
                    {selected_pizza.id}
                    {selected_pizza.name}
                    {/** direct call this.props.dispatch(action) */}
                    {/**<button onClick={() => this.props.dispatch({type: 'UNSELECT_PIZZA'})} >Close</button>*/}
                </h2>
                <p>
                    <em>{selected_pizza.description}</em>
                </p>
                <button onClick={this.closeClickHandler} >Close</button>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    // Note: this could be 'undefined' if no pizza is selected.    
    const foundPizza = reduxState.pizzaList.find(
        (pizza) => {
            return pizza.name === reduxState.selectedPizza
        }
    )
    return {
        selectedPizza: foundPizza ? foundPizza : {}   // foundPizza is 'undefined' initially
    }
}

function mapDispatchToProps(dispatch) {
    return {
        unselectPizza: () => {
            dispatch(
                {
                    type: 'UNSELECT_PIZZA'
                }
            )
        }
    }
}

const generateWrapperComponent = connect(mapStateToProps, mapDispatchToProps)
const ConnectedPizzaDetails = generateWrapperComponent(PizzaDetails)
export default ConnectedPizzaDetails