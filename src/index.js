import store from './store';
import * as actions from "./actionsType";
import { added, resolved } from "./action";

console.log(store);
console.log(store.getState());

store.subscribe(()=> {
    console.log("store changed", store.getState());
})


store.dispatch(added("bug1"))
store.dispatch(added("bug2"))
store.dispatch(added("bug3"))
store.dispatch(added("bug4"))

store.dispatch(resolved(3));

//unsubscribe();
console.log("risolto", store.getState());

store.dispatch({
    type: actions.BUG_REMOVED,
    payload : {
        id: 1
    }
})

//console.log(store.getState());

