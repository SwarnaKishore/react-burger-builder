import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo height='80%'/>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);


export default toolbar;