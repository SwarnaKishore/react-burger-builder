import React from 'react';
import Aux from '../../HOC/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>layout</div>
        <main className="Layout_Content">
            {props.children}
        </main>
    </Aux> 
);

export default layout;