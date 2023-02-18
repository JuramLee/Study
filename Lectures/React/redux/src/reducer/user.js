const initialState = [
  {
    id: 1,
    name: "이주람",
    // age: 20,
    // height: 170,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default reducer;
