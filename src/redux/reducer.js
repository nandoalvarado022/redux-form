const initialState = {
    parcerosList: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){        
        case "DELETE_PARCERO":
            let parcerosList = state.parcerosList.filter((item, ind) => {
                return item.id !== payload.parcero
            })
            return {...state, parcerosList: parcerosList}
        break;

        case "ADD_PARCERO":
            let idParcero = state.parcerosList.length + 1;
            let nuevoParcero = {...payload.nuevoParcero, idParcero: idParcero};
            return {...state, parcerosList: [nuevoParcero, ...state.parcerosList]}
        break;

        case "ASSIGN_PARCEROS":
            return {...state, parcerosList: payload.parcerosList}
        break;

        default:
            return state;
        break;
    }
}

export default reducer;