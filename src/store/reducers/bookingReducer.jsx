import { createReducer } from "@reduxjs/toolkit";
import { addSeat, deleteSeat } from "../actions/bookingActions";
const initialState = {
  danhSachGhe: [],
};
const bookingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addSeat, (state, action) => {
      state.danhSachGhe.push(action.payload);
    })
    .addCase(deleteSeat, (state, action) => {
      state.danhSachGhe = state.danhSachGhe.filter(
        (ghe) => ghe.soGhe !== action.payload
      );
    });
});

export default bookingReducer;
