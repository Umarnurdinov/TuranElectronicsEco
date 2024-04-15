const LIKEPRODUCT = "LIKEPRODUCT";
const initialState = {
    counter:0,
    products: [],
};

function likeReducer(state = initialState, action) {
    switch (action.type) {
        case LIKEPRODUCT:
            const newState = { ...state };
            const findProduct = newState.products.find(
                (el) => el.id === action.payload.id
            );
            if (!findProduct) {
                newState.counter+=1
                newState.products.push(action.payload);
            }

            return newState;
        default:
            return state;
    }
}
export default likeReducer
