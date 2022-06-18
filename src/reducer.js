export const initialState ={
    basket:[]
}

export const actionTypes ={
    add_to_basket: "add_to_basket"
}

const reducer =(state, action)=> {
    console.log(action);

    switch(action.type){
    case "add_to_basket":
    return{
        ...state,
        basket: [...state.basket, action.item]
    }
    default: return state;
}
}

export default reducer
