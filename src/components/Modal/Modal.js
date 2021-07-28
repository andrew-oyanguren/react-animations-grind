import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    return (
        <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={props.show} 
            timeout={animationTiming} 
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
            }}
        >
            <div className='Modal'>
                <h1>A Modal</h1>
                <button className='Button' onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default modal;

/*

===== Animation Timing =====

The timeout duration is not the same as your animation timing you set in your css.

The timeout can be shorter and will simply just quit the animation early.

=== Alternative timing definition ===

You can define the timing not just in a single millisecond number,
but also in an object that passes two properties.

1. enter
2. exit

You can set these two in an object, and then pass this object to the timeout prop.
* This allows you to set a different timing for the entering an exiting states.

* NOTE: You can define this object outside of your component to prevent unnecessary re-rendering.



=== CSSTransition ===

Sometimes you don't want to control the transition as we do with the transition component.
Where you execute a fiunction that receieves the state, and then manually change css styling
to the different states.

* Sometime you just want to have a couple predefined CSS classes for the different animation states,
and you want to make sure they get attached depending on the animation.
* Essentially what we are doing with Transition component, but handled manually.

This package also provides us with the CSSTransition component to make this possible.

=== Using CSSTransition ===

CSSTransition doesnt use any function inside to render component and manipulate the different states.



=== classNames ===

CssTransition needs an additional prop called 'classNames'.

Here we define which css classes should be added to the wrapped element,
depending on the stater of the transition.

* NOTE: It will always keep the original class name(s) of the element,
but it will merge new ones based on the state.


=== Defining ClassNames ===

You can pass any string name you like, for example 'fade-slide'.

* The CSSTransition component will cycle through the classes and merge them to the element it wraps
depending on the state of the transition.

These classes are defined by concatenating the states tonour string name we creating.

For example:

1. fade-slide
2. fade-slide-enter
3. fade-slide-enter-active
4. fade-slide-exit
5. fade-slide-exit-active

* NOTE: It is our job to create these classes in our css to handle the transition states.


=== Adding our animations CSS ==

We want to add our animiation css definition to our activs states as that is where the enter and exit states are being rendered,
the enter and exit are before and after states.



==== Additional classNames Definition ====

For some reason, if you want to still use your other class names, instead of -enter-active for example,
there is a way to use other CSS names.

=== Passing an object ===

Instead of a CSS string name you can add an object definition to classNames.

In this Object you can manually define the various names for the different states that should be used.

There are 6 total properties you can define in your Object:

1. enter
2. enterActive
3. exit
4. exitActive
5. appear
6. appearActive

* NOTE: 'appear' and 'appearActive' are used for when something is rendered for the first time to the DOM.


*/