const initialState = {
    item: [],
    loading: false
}

const bigImage = (state=initialState, action) => {
    switch (action.type) {
        case 'bigImage/loud/start':
            return {
                ...state,
                loading: true
            }
        case 'bigImage/loud/success':
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        case 'comments/success':
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}
export default bigImage;