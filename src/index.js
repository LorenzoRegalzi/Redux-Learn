import configureStore from './store/configureStore';
import * as actions from "./store/bugs";


const store = configureStore(); 

//console.log(store);                  you can see the prop
// console.log(store.getState());      need subscribe

store.subscribe(()=> {
    console.log("every time that the state of store change", store.getState());
})


store.dispatch(actions.bugAdded("bug1"))
store.dispatch(actions.bugAdded("bug2"))
store.dispatch(actions.bugAdded("bug3"))
store.dispatch(actions.bugAdded("bug4"))

store.dispatch(actions.bugResolved(3));

//unsubscribe();
console.log("after bug resolved", store.getState());

store.dispatch({
    type: "bugRemoved",
    payload : {
        id: 1
    }
})



console.log("final state store", store.getState());

