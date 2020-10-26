1. What problem does the context API help solve?
    Context API is a lightweight version of Redux. By 'lightweight', I mean that it is easier/faster to set up and also easier to use. That being said, it is not as intensive as redux, so there are good uses for each. A smaller-scale app where prop passing and state mangement is *just* beginning to become messy is a perfect candidate for Context API.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are carriers of data. They inform the store of what is happening and--sometimes--they provide data that the store needs.
    Reducers are state-logic. They recieve an action and make a new copy of the state using the logic you provide them & the data provided from actions.
        Reducers specify what happens to the state if a certain action comes-forth. They essentially react to the actions.
    The store holds the entire state tree of an application. Within the store, our state is held and we must dispatch actions to it in order to alter the state. This is why it is regarded as a 'single source of truth'... All state changes must get dispatched through the store. It is a single-point of access, if you will.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state or 'redux state' is a global state that all components have access to (as long as they are children of the provider component).
    Component state, on the other hand, is local to only one component. This state can only be read and written to in that component and children components. It can be passed down to other children components by props.
    Application state is useful for user data, content, etc. Component state, however, is useful for things like form data and user settings that are useful for that specific component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is a middleware that allows us to return functions instead of only actions. It sallows us to dispatch asynchronous actions to our state. Fetching and posting data to an API would be have to occur synchronously and slowly without redux-thunk.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Context API is certainly my favorite state managment system I've learned this sprint. It's simplicty and lightweight set up makes it super handy!
