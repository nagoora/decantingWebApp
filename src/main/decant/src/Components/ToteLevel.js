import React, {useEffect, useRef, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {useGlobalState} from '../App';


const ToteLevel = React.memo(() => {

    const [state, dispatch] = useGlobalState();
    const handleRadioChange = (e) => {
        console.log("Tote Level" , e.target.value);
    }

    return(
        <div>
        <FormLabel component="legend">Tote Level</FormLabel>
            <RadioGroup row aria-label="Tote Level" name="tote-level" onChange={handleRadioChange}>
                <FormControlLabel value="Partial" control={<Radio color="primary" />} label="Partial" />
                <FormControlLabel value="Full" control={<Radio color="primary" />} label="Full" />
        </RadioGroup>
       </div>
    )
})

export default ToteLevel;