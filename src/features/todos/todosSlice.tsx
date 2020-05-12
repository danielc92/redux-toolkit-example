import { createSlice, Dispatch } from "@reduxjs/toolkit";
import {} from ".";
import { RootState } from "../../app/store";

const initialState: ITodos = {
  loading: false,
  results: [],
  error: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.results = [];
    },
    setSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.results = action.payload;
    },
    setFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.results = [];
    },
  },
});

export const { setLoading, setSuccess, setFailure } = todosSlice.actions;

export const fetchTodos = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const results = await response.json();
    dispatch(setSuccess(results));
  } catch (error) {
    dispatch(setFailure(error.toString()));
  }
};
export const selectTodos = (state: RootState) => state.todos ;

export default todosSlice.reducer;
