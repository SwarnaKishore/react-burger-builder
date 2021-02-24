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
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(element => (
            <BuildControl key={element.label} 
                          label={element.label}
                          added={() => props.ingredientAdded(element.type)}
                          removed={() => props.ingredientRemoved(element.type)}
                          disabled={props.disabled[element.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;