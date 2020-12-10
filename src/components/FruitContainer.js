import React, { Component } from 'react';

//Components
import List from './List'
import Input from './Input'

class FruitContainer extends Component {
constructor(props) {
    super()

    this.state = {
        //initialize the fruit list to the full list passed into props

        fruitToDispaly: this.props.fruits,
        // initialize a filter value to empty string
        filterValue: ''
    };
}

handleFilterchanger = (e) => {
    e.preventDefault();
    let filterValue = e.target.value;
    // Remove the fruits that don't contain the filter value
    const filteredFruitList = this.componentWillReceiveProps.fruits.filter(fruit => {
        return fruit.toLowerCase().includes(filterValue.toLowerCase())
    })

    this.setState({ fruitsToDisplay: filteredFruitList, filterValue });
}

    render() {
        // Inside of Input Component, to access props, I will say props.value
        // Inside of List Componentt, to access props, I will say props.fruits
        return (
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}


export default FruitContainer;