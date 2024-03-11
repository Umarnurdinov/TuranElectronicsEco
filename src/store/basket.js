//изначальное состояние
const ADDPRODUCT = "ADDPRODUCT";
const initialState = {
    counter: 0,
    products: [],
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
                newState.products.push(action.payload);
            }

            return newState;
        default:
            return state;
    }
}
export default basketReducer;
