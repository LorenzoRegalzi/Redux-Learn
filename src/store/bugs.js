import { createSelector, createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api';
import moment from 'moment';

let id = 0;

const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },    
    reducers: {
        bugsRequested: (bugs, action ) => {
            bugs.loading = true
        },
        bugsRequestedFail: (bugs, action ) => {
            bugs.loading = false
        },
        bugsReceived: (bugs, action ) => {
            bugs.list = action.payload;
            bugs.loading = false;
            bugs.lastFetch = Date.now();
        },
        bugAssignToUser: (bugs, action) => {
            // const {bugsId, userId} = action.payload;
            // const index = bugs.list.findIndex(bug => bug.id === bugsId);
            // bugs.list[index].userId = userId;
            bugs.list.push(action.payload);
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload)
        },
        bugResolved: (bugs, action) => {
            // const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
            // bugs.list[index].resolved = true
            bugs.list.push(action.payload);
        },
        bugRemoved: (bugs, action) => {
            //bugs.filter(bug => bug.id == action.payload.id);
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
            bugs.list.splice(index, 1);
           
        },
        
    }
});


export const {bugAdded, bugResolved, bugRemoved, bugToMember, bugAssignToUser, bugsReceived, bugsRequested, bugsRequestedFail} = slice.actions;
export default slice.reducer;


// Action creators
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {

    const { lastFetch } = getState().entities.bugs;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
    if (diffInMinutes < 10) return;


    console.log(lastFetch);

    dispatch(
        apiCallBegan({
            url,
            onStart: bugsRequested.type,
            onSuccess: bugsReceived.type,
            onError: bugsRequestedFail.type
        })
    )

}

export const addBugs = bug => apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
})


export const addBugsToUser = (userId, bugsId) => apiCallBegan({
    url : url + "/" + bugsId,
    method: "patch",
    data: {userId: userId},
    onSuccess: bugAssignToUser.type,
})

export const resolveBug = bugId => apiCallBegan({
    url : url + "/" + bugId,
    method: "patch",
    data: {resolved: true},
    onSuccess: bugResolved.type,
})

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
