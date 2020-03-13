import React from 'react'
// import a special higher-order component 'connect'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * assume the PizzaList component gets a pizzas list in its props.pizzasList
 */
class PizzaList extends React.Component {
    // specify the props types
    static propTypes = {
        pizzasList: PropTypes.array.isRequired,
        addPizza: PropTypes.func.isRequired,
        selectPizza: PropTypes.func.isRequired
    }

    state = {
        newPizzaName: ''
    }

    addClickHandler = () => {
        // if the new pizza name is an empty string (treated as false) then do not add it to the pizzas list
        if (this.state.newPizzaName) {
            console.log('Add new pizza: ', this.state.newPizzaName)
            this.props.addPizza(this.state.newPizzaName)
            // clear the input box after the new pizza name is added
            this.setState({ newPizzaName: '' })
        }
    }

    showDetailHandler = (event) => {
        console.log('clicked item ID: ', event.target.id)
        console.log('clicked item HTML: ', event.target.innerHTML)
        const selected_pizza_name = event.target.innerHTML
        this.props.selectPizza(selected_pizza_name)
    }

    render() {
        console.log('@PizzaList Render')
        return (
            <div>
                <h1>Pizza Explorer</h1>
                <ul>
                    {
                        this.props.pizzasList.map((pizza) => {
                            return (
                                <li key={pizza.id} id={pizza.id} onClick={this.showDetailHandler}>
                                    {pizza.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    New Pizza:
                    <input
                        value={this.state.newPizzaName}
                        onChange={(event) => {
                            this.setState({ newPizzaName: event.target.value })
                        }}
                    />
                    <button onClick={this.addClickHandler}>Add</button>
                </p>
            </div>
        )
    }
}

/** 
 * @summary map updated state from the redux store to a new props object
 *          that is then passed on to the PizzaList component.
 * @param {array} reduxState from the redux store
 * @return {object} a new props object for PizzaList component
 */
function mapStateToProps(reduxState) {
    // The 'pizzasList' field in this returned object becomes props.pizzasList
    const updated_props = {
        pizzasList: reduxState.pizzaList
    }
    console.log('@mapStateToProps - updated props object: ', updated_props)
    return updated_props
}

/**
 * @summary map dispatch function of the redux store to a new props object
 *          that is then passed on to the PizzaList component.
 * @param {function} dispatch redux store's action dispatch function
 * @return {object} a new props object for PizzaList component
 */
function mapDispatchToProps(dispatch) {
    // The 'addPizza' field in this returned object becomes props.addPizza
    return {
        addPizza: (pizzaName) => {
            dispatch(
                {
                    type: 'ADD_PIZZA',
                    payload: {
                        id: Math.floor(Math.random() * 10000),
                        name: pizzaName,
                        description: `enjoy your new ${pizzaName}`
                    }
                }
            )
        },
        selectPizza: (pizzaName) => {
            dispatch(
                {
                    type: 'SELECT_PIZZA',
                    payload: pizzaName
                }
            )
        }
    }
}

/**
 * If the redux store's state is updated due to a dispatched action, then
 * the higher order component function 'connect' will call the function
 * 'mapStateToProps' to calculate a new props object from updated state. And 
 * then this new props object will be passed on to the underlying connected 
 * component. After receiving new props object, the underlying component will
 * then rerender.
 * 
 */
// Higher order component
const generateWrapperComponent = connect(mapStateToProps, mapDispatchToProps)
/**
 * It is a function that accepts a component to wrap 'PizzaList' and
 * returns a new wrapper component 'ConnectedPizzaList'
 */
const ConnectedPizzaList = generateWrapperComponent(PizzaList)
/**
 * Whenever you import PizzaList from './PizzaList', 
 * you are actually importing ConnectedPizzaList
 */
export default ConnectedPizzaList