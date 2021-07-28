import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return (
        <div className={cssClasses.join(' ')}></div>
    );
};

export default backdrop;


/*

=== Create classes array ===

The goal is to create an array that we will convert into a string in our className prop.

* NOTE: We will use a ternary expression to dynamically change the array content,
based on the prop.show property.

* NOTE: Join() converts an array into a atring, and passes in the seperator.
Here it's an empty space.



*/