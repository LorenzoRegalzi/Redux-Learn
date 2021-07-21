import { createSlice } from '@reduxjs/toolkit'

let id = 0;

const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++id,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true
        },
        bugRemoved: (bugs, action) => {
            //bugs.filter(bug => bug.id == action.payload.id);
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1);
           
        }
    }
});


export const {bugAdded, bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;
// action types

// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");

// const BUG_REMOVED = "bugRemoved";



// // reducer 
// let id = 0;

// export default createReducer([], { 
//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({
//             id: ++id,
//             description: action.payload.description,
//             resolved: false
//         })
//     },
//     [bugResolved.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true
//     }
// })

// // export default function reducer (state = [], action) { 
// //     switch(action.type){
// //         case bugAdded.type:
// //             return [
// //                 ...state,
// //                 {
// //                     id: ++id,
// //                     description: action.payload.description,
// //                     resolved: false
// //                 }
// //             ];
// //         case BUG_REMOVED:
// //             return state.filter(bug => bug.id !== action.payload.id);
// //         case bugResolved.type:
// //             return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved : true})

// //         default:
// //             return state;
// //     }
// // }

