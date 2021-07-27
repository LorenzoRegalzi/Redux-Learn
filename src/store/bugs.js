import { createSelector, createSlice } from '@reduxjs/toolkit'

let id = 0;

const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAssignToUser: (bugs, action) => {
            const {bugsId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugsId);
            bugs[index].userId = userId;
        },
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++id,
                description: action.payload.description,
                resolved: false,
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
           
        },
        
    }
});

// filter
//Mmeoization
//bugs => get unresolved bugs from the cache if the state of store not change, with this the filter is not recalculate every time
export const getBugUnresolved =  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)

export const {bugAdded, bugResolved, bugRemoved, bugToMember, bugAssignToUser} = slice.actions;
export default slice.reducer;


