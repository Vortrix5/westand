
const initState = {
    auth: false
        
    
}

export default function genReducer(state = initState, action) {
    switch (action.type) {
        case "ON_AUTH": return {...state, auth: true}
            default: return state
    }


}
