
const initialState = {
    list: [],
    activeId: null,
}
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_hOBBY': {
            const newlist = [...state.list];
            newlist.push(action.payload)
            return { //return object moi
                ...state, //giu lai tat ca state hien tai
                list: newlist, //mang se la mang moi
            };

        }
        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            }

        }
        default:
            return state;
    }
}

export default hobbyReducer;