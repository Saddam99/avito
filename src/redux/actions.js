export const loadImage = () => {
    return dispatch => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'image/loud/success',
                    payload: json
                })
            })
    }
}

export const loadBigImage = (id) => {
    return dispatch => {
        dispatch({ type: 'bigImage/load/start'});

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'bigImage/loud/success',
                    payload: json
                })
            })
    }
}

// export const addComments = (id , comment) => {
//     return dispatch => {
//         fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
//             method: 'POST',
//             body:JSON.stringify({
//                 comments: comment
//             }),
//             headers: {'Content-type': 'application/json'}
//         })
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({
//                     type: 'comment/success',
//                     payload: json
//                 })
//             })
//     }
// }