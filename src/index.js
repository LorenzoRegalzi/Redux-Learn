import configureStore from './store/configureStore';
import * as action from "./store/projects";
import * as actions from "./store/bugs";
import * as actionsUser from "./store/users";
import { getBugUnresolved, getBugsByUser } from "./store/bugs";


const store = configureStore(); 

//console.log(store);                  you can see the prop
// console.log(store.getState());      need subscribe

store.subscribe(()=> {
    console.log("every time that the state of store change", store.getState());
})

//add User
store.dispatch(actionsUser.createUser({name : "Mimmo"}))
store.dispatch(actionsUser.createUser({name : "Alby"}))


store.dispatch(actions.bugAdded({description : "bug1"}))
store.dispatch(actions.bugAdded({description : "bug2"}))
store.dispatch(actions.bugAdded({description : "bug3"}))
store.dispatch(actions.bugAdded({description : "bug4"}))
store.dispatch(actions.bugAssignToUser({bugsId :  1, userId: 1}))


store.dispatch(actions.bugResolved({id: 3}));

//unsubscribe();
console.log("after bug resolved", store.getState());


console.log("after bug assign to team member", store.getState());
const TeamMemberBug = getBugsByUser(1)(store.getState());

//const bugUnresolved = store.getState().entities.bugs.filter(bug => !bug.resolved);
const bugUnresolved = getBugUnresolved(store.getState());



console.log('to do', bugUnresolved);
console.log('user1 to do', TeamMemberBug);
store.dispatch(actions.bugRemoved({id: 2}));



console.log("final state store", store.getState()); 



// change store import with projects

store.dispatch(action.incrementProject({name : "project 1"}))


