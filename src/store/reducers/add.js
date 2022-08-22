import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const getAdd = createAsyncThunk(
  "add/getAdd",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("http://localhost:5000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      dispatch(changeResult(res.ans));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getDiv = createAsyncThunk(
  "add/getDiv",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("http://localhost:5000/api/div", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      dispatch(changeResult(res.ans));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getMul = createAsyncThunk(
  "add/getMul",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("http://localhost:5000/api/mul", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      dispatch(changeResult(res.ans));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSub = createAsyncThunk(
  "add/getSub",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("http://localhost:5000/api/sub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      dispatch(changeResult(res.ans));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Add = createSlice({
  name: "add",
  initialState,
  reducers: {
    changeValueA(state, action) {
      state.numberA = action.payload;
    },
    changeValueB(state, action) {
      state.numberB = action.payload;
    },
    changeResult(state, action) {
      state.result = action.payload;
    },
    clear(state, action) {
      state.numberA = action.payload.a;
      state.numberB = action.payload.b;
      state.result = action.payload.result;
    },
    undoOne(state, action) {
      state.numberA = action.payload;
    },
    undoTwo(state, action) {
      state.numberB = action.payload;
    },
  },
  extraReducers: {
    [getAdd.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getDiv.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getMul.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getSub.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  changeValueA,
  changeValueB,
  changeResult,
  error,
  clear,
  undoOne,
  undoTwo,
} = Add.actions;
export default Add.reducer;
