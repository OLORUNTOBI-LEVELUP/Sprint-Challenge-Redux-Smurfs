1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

##Answer
array.concat()
array.map()
array.filter()


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

##Answer
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

The Store is the object that brings actions and reducers together. The store holds application state, allows access to state, allows state to be updated via dispatch, registers listeners and handles unregistering of listeners

The store is known as the single source of truth in a redux application because its holds all the state in one place. All the state are hoisted in the store and then passed as props to components


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

##Answer
Application state is the "global" state that all components in the component tree can access while component state is the state thats local to that component only and cannot be seen outside that component


1.  What is middleware? 

##Answer
 Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
##Answer
Redux Thunk is a commonly used middleware for asynchronous orchestration i.e asychronous calls. Redux thunk lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect