import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
  ];

const buildControls = (props) => (
    <div className={classes.BuildControls}> 
        {controls.map(element => (
            <BuildControl key={element.label} 
                          label={element.label}
                          added={() => props.ingredientAdded(element.type)}
            />
        ))}
    </div>
);

export default buildControls;