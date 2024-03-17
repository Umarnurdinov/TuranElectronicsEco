//изначальное состояние
const ADDPRODUCT = "ADDPRODUCT";
const DELETEPRODUCT = "DELETEPRODUCT";
const DELETEPRODUCTALL = "DELETEPRODUCTALL";
const AMOUNTPLUS = "AMOUNTPLUS";
const AMOUNTMINUS= "AMOUNTMINUS";


export const deleteAllProducts = () => {
    return {
        type: DELETEPRODUCTALL
    };
};

const initialState = {
    counter: 0,
    products: [],
    price: 0,
    amount: 0,
};
function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADDPRODUCT:
            const newState = { ...state };
            const find = newState.products.find(
                (el) => el.id === action.payload.id
            );

            if (!find) {
                newState.counter += 1;
                newState.price += action.payload.price;
                newState.products.push(action.payload);
            }

            return newState;

        case DELETEPRODUCT:
            return {
                ...state,
                counter: (state.counter -= 1),
                products: state.products.filter(
                    (el) => el.id !== action.payload
                ),
            };
   

        case AMOUNTPLUS:
            const newState2 = { ...state };
            newState2.amount += action.payload ;
            return newState2;
            case AMOUNTMINUS:
                const newState3 = { ...state };
                newState3.amount -= action.payload ;
                return newState3;


// Добавьте новый case в reducer
case DELETEPRODUCTALL:
    return {
        ...state,
        counter: 0,
        products: [],
        price: 0,
        amount: 0
    };

      
        default:
            return state;
    }
}
export default basketReducer;
