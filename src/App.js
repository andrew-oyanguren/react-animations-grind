import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className='Button' onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        <Transition 
          in={this.state.showBlock} 
          timeout={300} 
          mountOnEnter 
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1
            }}
            />
          )}
        </Transition>
        <Modal closed={this.closeModal} show={this.state.modalIsOpen} />          
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;


/*

=== Limitations of CSS Transitions and Animations ===

1. The element we are animating are always present in our HTML, and they are just not visible.

* This means that these elements, that are not being used all the time, are always
populating the DOM. This is not very 'React(ive)'.

* NOTE: This is not always a bad thing, like in our burger menus, and or a small modal,
or some side drawer menu, This typical way to animate CSS could be totally fine.

=== Showing and Hiding Elements Differently ===

First, lets say we want to show and hide our elements differently, 
where they are not always part of the DOM.

One way to do that is to, instead of passing our 'show' state to out components,
and having them render CSS conditionally to the show state value,
We can just use a ternary in our JSX to dynamically render that content if
the show state is truthy or not.

=== Dynamic/css Animations Limitation ===

We can still pass our show state prop, in addition to rendering the component dynamically,
to the component so that the component can utilize CSS animations based on that state.

* PROBLEM: But there is a problem. The animation for showing the component does in fact work,
but the animation for closing does not, because the component gets instantly erased from the DOM
as we dynamically rendered the component in JSX, and this is a limitation to CSS.


=== React Transition Group ===

React transition Group is a package that allows you to swiftly animate React elements
when they are added/removed form the DOM!

This package exports some 'components we can use':



=== Using Transition Component ===

1. You can import Transition from 'react-transition-group/Transition';

* Then we use this 'Transition' component to wrap whatever we want to animate!

We use the Transition element to control the display of elements inside of it,
and especially the animations of these components.

* The Transition Component manages 4 internal transition states:

1. ENTERING
2. ENTERED
3. EXITING
4. EXITED

* We can listen to these 4 states to decide what to do with our component.

== In Prop ==

The Transition component gets an 'in' prop that decides whether or not
the components wrapped (inside) should be shown or not.

In our example we set in equal to our showBlock state.


== Timeout Prop ===

We also have the 'timeout' prop that we need to pass to our Transition component.
This prop is a time value, that determines how long this animation should be played.

time value: milliseconds like in JavaScript.

* FURTHER DETAIL:

Timeout actually determines the time it takes to go between our 'ENTERING' to 'ENTERED',
and from 'EXITING' to 'EXITED' states.


=== Inside the Transition Component ===

Inside the transition component we actually render a function in curly braces.

* NOTE: The Transition component actualluy gives us back values that we can use in a function.

== Transition State ===

The transition component catually gives us back one value, to be exact, and that's the 'state'.

* And then we can use an arrow function to render content.

== Syntax == 

{state => <p>Content</p>}



=== Take advantage of our states in our function ===

We can use turnary expressions in our css javascript definitions to render our css
conditionally.

Example: opacity: state === 'exited' ? 0 : 1



=== Adding animations to our Transition Component ===

* Transition css property: We can use the transition property to add our transition
to our function.



=== Adding Removing from the DOM ===

We can control if our components remain in the DOM or not using two more props:

1. mountOnEnter: This is a boolean prop that says if the 'in' prop is set to true,
you should add the element to the DOM.

2. unmountOnExit: To remove it from the dom.

* No value needed with props.

* NOTE: React only removes that element from the DOM after the given timeout period.


=== Wrapping Transition Component ===

Something to note is that you can wrap any element with transition,
it does not need to be the entire component. You could wrap any JSX element inside a component.

* NOTE: You are required to import the Transition component though,
wherever you are going to use it.


=== Executing Code State Based ===

Sometime you not only want to change timings or dynamically show content, 
but you may want to run some code when state changes as well.

* For that, you have various callbacks (functions) you can add to the transitions.

Ther are 6 different props that can bind state to functions:

1. onEnter
2. onEntering 
3. onEntered
4. onExit
5. onExiting
6. onExited

* These are executed in this order. This is great for creating stagard animations;
where you want to wait for one animation to finish before you start another.

*/