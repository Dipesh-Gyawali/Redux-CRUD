const initialState = {
  currentPage: 1,
  perPage: 10,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        perPage: state.perPage,
      };
    case "DECREASE_PAGE":
      return {
        ...state,
        currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
        perPage: state.perPage,
      };
    case "PAGINATION":
      return { ...state, currentPage: action.payload.currentPage, perPage: action.payload.perPage };
    default:
      return state;
  }
};

export default paginationReducer;
