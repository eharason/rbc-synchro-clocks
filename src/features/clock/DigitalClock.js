import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, makeStyles } from '@material-ui/core';
import { setHour, setMinutes, selectHour, selectMinutes } from './clockSlice'

const useStyles = makeStyles({
    digitalClock: {
        background: 'black',
        border: 20,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 3,
        color: 'white',
        padding: '0 30px',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    digitalNumbers: {
        color: 'red',
        fontFamily: 'Courier',
        fontSize: "100px",
        maxWidth: "155px"
    },
    digitalColon: {
        color: 'red',
        fontFamily: 'Courier',
        fontSize: "100px",
        maxWidth: "55px"
    }
});

export function DigitalClock() {
    const classes = useStyles();

    const currentHour = useSelector(selectHour);
    const currentMinutes = useSelector(selectMinutes);

    const [seconds, setSeconds] = useState((new Date().getSeconds()<10?'0':'') + new Date().getSeconds());
    const renderSeconds = () => {
        return (new Date().getSeconds()<10?'0':'') + new Date().getSeconds();
    };
    useEffect(() => {
        setTimeout(() => {
            setSeconds(renderSeconds());
        }, 1000);
    });

    const dispatch = useDispatch();

    const errorHours = currentHour > 23;
    const errorMinutes = currentMinutes > 60;

    return (
        <div className={classes.digitalClock}>
            <TextField
                aria-label="Set hour on digital clock"
                value={currentHour}
                onChange={e => dispatch(setHour(e.target.value))}
                helperText={errorHours ? "Hours must be between 00 and 23" : ""}
                error={errorHours}
                InputProps={{
                    className: classes.digitalNumbers
                }}
            />
            <div className={classes.digitalColon}>:</div>
            <TextField
                aria-label="Set minutes on digital clock"
                value={currentMinutes}
                onChange={e => dispatch(setMinutes(e.target.value))}
                helperText={errorMinutes ? "Minutes must be between 00 and 60" : ""}
                error={errorMinutes}
                InputProps={{
                    className: classes.digitalNumbers
                }}
            />
            <div className={classes.digitalColon}>:</div>
            <div className={classes.digitalNumbers}>{seconds}</div>
        </div>
    )
}

export default DigitalClock
