const initialState = {
    item: [],
    loading: false
}

const image = (state=initialState, action) => {
    switch (action.type) {
        case 'image/loud/success':
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}
export default image;