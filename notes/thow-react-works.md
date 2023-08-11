# Components, instances, and elements

- Components are the functions that you write in React

- Component instances are instances of the component. Their can be many different instances from the same component. Just like a Javascript object

- Elements are objects that hold all the info about how to render itself to the DOM

# How rendering works

- Renders are only triggered when the application starts and when state is changed

- The render process is triggered for the entire appliaction

- React does not descard the whole DOM on re-render

# Render phase

- React calls updated component

- Updated component and its children are placed in a new virtual DOM

  ## Virtual DOM

  - Tree of all react elements created from all react instances

- Virtual DOM is created

  ## Fiber tree

  - Tree of all react elements before state update

- Virtual DOM and Fiber tree are compared and a list of updates (insertions and deletions) are made for the DOM

# Commit phase

- ReactDOM writes the list of updates to the DOM, this action is synchronus

- After commit phase is completed the workInProgess fiber tree becomes current

- Browser paints the DOM to screen (updates are made visible)

# React rendering overview

- Lecture 128 slide

# Diffing -- IMPORTANT

- If an element changes at its position react will
- - Create a whole new element and destroy the old one
- - This competly resets state

- If an element is not changed (props can be updated) react will
- - Keep element, its children, and state
- - New props and attributes will be passed in

# Key prop

- Special prop used to the the diffing algo. that an element is unique

- When a key stays the same across renders, the element with be kept in the DOM

- When a key changes between renders, the element will be destroyed and a new one takes its place

# Batching

- Batching in react is to put all the setState functions into one render so you do not render multiple times

# Events

## How events work

- Events originate in the root and travel down to the target element

- When events get to the destination, they can be handled on that element or its parent

- That works because events also bubble (travel back up the DOM) and go into every single parent

- Delegation is handling events on parents (works because of bubbling)

## How react events work

- Add events are added to the #root and are handled there
