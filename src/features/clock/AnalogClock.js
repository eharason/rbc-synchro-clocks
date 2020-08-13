import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, TextField, makeStyles } from '@material-ui/core';
import { setHour, setMinutes, selectHour, selectMinutes } from './clockSlice'

const useStyles = makeStyles({
    analog: {
        padding: '30px'
    },
    analogHands: {
        width: '300px',
        height: '300px',
        border: 'solid 20px grey',
        borderRadius: '50%',
        position: 'relative',
        background: "white"
    },
    dial: {
        position: 'absolute',
        transformOrigin: 'bottom left',
        left: '50%',
        height: '150px',
        '&.hours': {
            borderLeft: 'solid 15px teal',
        },
        '&.minutes': {
            borderLeft: 'solid 15px red',
        }
    }
})

export function AnalogClock() {
    const classes = useStyles();

    const [openHour, setOpenHour] = useState(false);
    const [openMinutes, setOpenMinutes] = useState(false);

    const currentAnalogHour = useSelector(selectHour);
    const currentAnalogMinutes = useSelector(selectMinutes);

    const dispatch = useDispatch();

    const minutesStyle = {
        transform: `rotate(${currentAnalogMinutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${currentAnalogHour * 30}deg)`
    };
    const handleMinutesOpen = () => {
        setOpenMinutes(true)
    }
    const handleMinutesClose = () => {
        setOpenMinutes(false)
    }
    const handleHourOpen = () => {
        setOpenHour(true)
    }
    const handleHourClose = () => {
        setOpenHour(false)
    }
    
    return (
        <div className={classes.analog}>
            <div className={classes.analogHands}>
                <div title={"minute hand"} className={`${classes.dial} minutes`} style={minutesStyle} onClick={handleMinutesOpen} />
                <div title={"hour hand"} className={`${classes.dial} hours`} style={hoursStyle} onClick={handleHourOpen} />
                <Dialog open={openHour} onClose={handleHourClose} >
                    <TextField
                        aria-label="Set hour on analog clock"
                        defaultValue={currentAnalogHour}
                        onChange={e => dispatch(setHour(e.target.value))}/>
                </Dialog>
                <Dialog open={openMinutes} onClose={handleMinutesClose} >
                    <TextField
                        aria-label="Set minutes on analog clock"
                        defaultValue={currentAnalogMinutes}
                        onChange={e => dispatch(setMinutes(e.target.value))}/>
                </Dialog>
            </div>
        </div>
    );
}

export default AnalogClock
