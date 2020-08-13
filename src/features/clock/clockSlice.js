import { createSlice } from '@reduxjs/toolkit';

export const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        hour: (new Date().getHours()<10?'0':'') + new Date().getHours(),
        minutes: (new Date().getMinutes()<10?'0':'') + new Date().getMinutes()
    },
    reducers: {
        setHour: (state, action) => {
            state.hour = action.payload;
        },
        setMinutes: (state, action) => {
            state.minutes = action.payload;
        },
    },
});

export const { hour, minutes, setHour, setMinutes } = clockSlice.actions;
export const selectHour = state => state.clock.hour;
export const selectMinutes = state => state.clock.minutes;

export default clockSlice.reducer;
