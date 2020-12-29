import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        }
    }

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls />
            </Auxiliary>

        );
    }
}

export default BurgerBuilder;