import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IssueApi from '../Apis/issueApi';

// value
const initialState = {
  issues: [],
  targetIssue: {},
  getTodoState: {
    loading: false,
    done: false,
    error: null,
  },
};

// reducer
export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.getTodoState.loading = true;
    });

    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.error = null;
    });

    builder.addCase(getIssues.rejected, (state, action) => {
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.error = action.payload;
    });

    builder.addCase(getTargetIssue.pending, (state) => {
      state.getTodoState.loading = true;
    });

    builder.addCase(getTargetIssue.fulfilled, (state, action) => {
      state.targetIssue = action.payload;
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.error = null;
    });

    builder.addCase(getTargetIssue.rejected, (state, action) => {
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.error = action.payload;
    });
  },
});

export const getIssues = createAsyncThunk('issue/getIssues', async (issue) => {
  const res = await IssueApi.getIssueList(issue);
  return res.data;
});

export const getTargetIssue = createAsyncThunk(
  'issue/getTargetIssue',
  async (id) => {
    const res = await IssueApi.getIssue(id);
    return res.data;
  }
);
