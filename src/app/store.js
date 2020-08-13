import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';

export default configureStore({
  reducer: {
    clock: clockReducer,
  },
});
