import React, {useEffect, useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useGlobalState} from '../App';


const DestinationLpn = React.memo(() => {
    const [state, dispatch] = useGlobalState();

    const handleDestinationLpnChange =(e) => {
        if(e.target.value){
            dispatch({destinationLpn:e.target.value, destinationLpnError: false, destinationLpnErrorMsg: ""})
        }else{
            dispatch({destinationLpn:"", destinationLpnError: true, destinationLpnErrorMsg: "Destination LPN required"})
        }
    }

    return(
        <TextField 
        id="destination-lpn"
        label="Destination Pallet LPN"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        multiline
        required
        value = {state.destinationLpn}
        error={state.destinationLpnError}
        helperText={state.destinationLpnErrorMsg}
        onChange={handleDestinationLpnChange}
        onBlur={handleDestinationLpnChange}
    />
    )
})

export default DestinationLpn;
