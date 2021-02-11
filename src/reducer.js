
export const initialState={
    basket:[],
    user: null
};

export const getBaskerTotal = (basket) =>(
    basket?.reduce((amount,item)=> item.price + amount , 0)
);


const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET" :
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET" :
            let newBasket = [...state.basket];
            const i = state.basket.findIndex((basketItem) => (basketItem.id===action.id));

            if(i>=0){
                newBasket.splice(i,1);
            }else{
                console.warn(
                    `Can't remove the product(id: ${action.id}) as it is not available`
                )
            }
            return{...state, basket:newBasket};
        default:
            return state;
    }   
}

export default reducer;