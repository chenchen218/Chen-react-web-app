import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: payload.title,
        course: payload.course,
        description: payload.description || "",
        dueDate: payload.dueDate,
        points: parseInt(payload.points),
        availableFrom: payload.availableFrom,
        untilDate: payload.untilDate,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === payload._id
          ? {
              ...assignment,
              title: payload.title,
              description: payload.description,
              points: parseInt(payload.points),
              dueDate: payload.dueDate,
              availableFrom: payload.availableFrom,
              untilDate: payload.untilDate,
            }
          : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
