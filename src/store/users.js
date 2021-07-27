import { createSlice } from '@reduxjs/toolkit'

let startIndex = 0;

const counterSlice = createSlice({
    name: 'user',
    initialState : [],
    reducers: {
        createUser(user, action) {
        user.push({
            id : ++startIndex,
            name : action.payload.name
        })
      },
    },
})

export const {createUser} = counterSlice.actions;
export default counterSlice.reducer;