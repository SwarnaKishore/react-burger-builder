import React from 'react';
import Aux from '../../HOC/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="Layout_Content">
            {props.children}
        </main>
    </Aux> 
);

export default layout;