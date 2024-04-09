export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

/////////////////////////////////////////
// fetch api

export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

export const fetchData = (signal: AbortSignal) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        signal,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(signal, "SUCCESS");
          return dispatch(fetchDataSuccess(data));
        })
        .catch((error) => {
          console.log(signal, "ABORTED");
          dispatch(fetchDataFailure(error));
        });
    }, 2000);
  };
};

////////////////////////////////////////////
// pagination

export const incrementPage = () => ({
  type: "INCREASE_PAGE",
});

export const decreasePage = () => ({
  type: "DECREASE_PAGE",
});

export const pagination = (payload) => ({
  type: "PAGINATION",
  payload: payload,
});
