import * as actions from "./actionsType";

let id = 0;

export default function reducer (state = [], action) { 
    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++id,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
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