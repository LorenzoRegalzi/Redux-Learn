import { createSlice } from '@reduxjs/toolkit'

let startIndex = 0;

const counterSlice = createSlice({
    name: 'project',
    initialState : [],
    reducers: {
      incrementProject(project, action) {
        project.push({
            id : ++startIndex,
            name : action.payload.name
        })
      },
    },
})

export const {incrementProject} = counterSlice.actions;
export default counterSlice.reducer;