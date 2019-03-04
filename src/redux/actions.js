export const addParcero = (nuevoParcero) => (dispatch) => {
    dispatch({
        type: "ADD_PARCERO",
        payload: {
            nuevoParcero
        }
    })
}

export const assignParceros = (parcerosList) => (dispatch) => {
    dispatch({
        type: "ASSIGN_PARCEROS",
        payload: {
            parcerosList
        }
    })
}

export const deleteParcero = (parcero) => (dispatch) => {
    dispatch({
        type: "DELETE_PARCERO",
        payload: {
            parcero
        }
    })
}