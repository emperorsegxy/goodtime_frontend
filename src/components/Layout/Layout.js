import React from 'react';
// import Aux from '../../hoc/Aux';

const layout = (props) => (
    <React.Fragment>
        <div></div>
        <main className="h-100">
            {props.children}
        </main>
    </React.Fragment>
);

export default layout
