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
      return res;
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
      return res;
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
      return res;
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
      return res;
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
      state.result = action.payload.ans;
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
    undoResult(state, action){
    state.result = action.payload
    },
    redo(state, action) {
      state.arrA = action.payload[0];
      state.arrB = action.payload[1];
      state.result = action.payload[2];
    },
  },
  extraReducers: {
    [getAdd.fulfilled]: (state, action) => {
      state.arrA.push(action.payload.a);
      state.arrB.push(action.payload.b);
      state.result = action.payload.ans;
    },
    [getDiv.fulfilled]: (state, action) => {
      state.arrA.push(action.payload.a);
      state.arrB.push(action.payload.b);
      state.result = action.payload.ans;
    },
    [getMul.fulfilled]: (state, action) => {
      state.arrA.push(action.payload.a);
      state.arrB.push(action.payload.b);
      state.result = action.payload.ans;
    },
    [getSub.fulfilled]: (state, action) => {
      state.arrA.push(action.payload.a);
      state.arrB.push(action.payload.b);
      state.result = action.payload.ans;
    },
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
})
export const {
  changeValueA,
  changeValueB,
  changeResult,
  error,
  clear,
  undoOne,
  undoTwo,
  undoResult,
  redo
} = Add.actions;
export default Add.reducer;
