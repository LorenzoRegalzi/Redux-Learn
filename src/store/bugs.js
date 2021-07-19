// action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";


// action creator
export const  bugAdded = description => ({
    type: BUG_ADDED,
    payload : {
    description: description
    }
})

export const  bugResolved = (id)=> ({
    type: BUG_RESOLVED,
    payload : {
        id: id
    }
})


// reducer 
let id = 0;

export default function reducer (state = [], action) { 
    switch(action.type){
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++id,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved : true})

        default:
            return state;
    }
}


// if(action.type == "bugAdded"){
//     return [
//         ...state,
//         {
//             id: ++id,
//             description: action.type.description,
//             resolved: false
//         }
//     ]
// }
// else if(action.type == "bugRemoved"){
//     return state.filter(bug => bug.id !== action.payload.id)
// }
// return state