const initialState = {
  email: "",
};

function emaildata(state = initialState, action) {
  switch (action.type) {
    case "EmailData":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
}
export default emaildata;
