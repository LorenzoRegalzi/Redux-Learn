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

// filter
export const getBugUnresolved = (store) => store.getState().entities.bugs.filter(bug => !bug.resolved);

export const {bugAdded, bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;


