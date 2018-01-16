import Ingredient from './Ingredient'
import React from 'react';

const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) => 
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

export default IngredientsList