const formReducer = (state, action) => {
  return {
    ...state,
    [action.type]: [action.payload],
  };
};

export default formReducer;
