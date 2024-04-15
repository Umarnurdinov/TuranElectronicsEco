const initialState = {
  products: [],
  brands: [],
};

function dataInfo(state = initialState, action) {
  switch (action.type) {
    case "DataInfo":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case "BrandsInfo":
      return {
        ...state,
        brands: [...state.brands, ...action.payload],
      };

    default:
      return state;
  }
}
export default dataInfo;
