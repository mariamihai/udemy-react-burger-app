import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => (
                <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            ));
        });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />

            {transformedIngredients}

            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;