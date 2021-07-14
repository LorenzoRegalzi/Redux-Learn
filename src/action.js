import * as actions from "./actionsType";



export const  added = description => ({
        type: actions.BUG_ADDED,
        payload : {
        description: description
        }
})

export const  resolved = (id)=> ({
    type: actions.BUG_RESOLVED,
    payload : {
        id: id
    }
})