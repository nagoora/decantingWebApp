
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useGlobalState} from '../App';

const SuggestedMax = React.memo(() => {

    const [state, dispatch] = useGlobalState();

    const handleSuggestedMaxChange =(e) => {
        if(parseInt(e.target.value) > parseInt(state.totalUnits)){
            dispatch({ suggestedToteMaxError:true, suggestedToteMaxErrorMsg: "Cannot move qty greater than Total Units" })
        }else{
            dispatch({ suggestedToteMax:e.target.value, suggestedToteMaxError:false, suggestedToteMaxErrorMsg: "" })
        }

    }

    return(
        <TextField
            id="units-per-tote"
            name="unitsPerTote"
            label="Suggested Max Units Per Tote"
            style={{ margin: 8}}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            required
            variant="outlined"
            value={state.suggestedToteMax}
            error={state.suggestedToteMaxError}
            helperText={state.suggestedToteMaxErrorMsg}
            onChange={handleSuggestedMaxChange}
            onBlur={handleSuggestedMaxChange}
            
        />
    )

});

export default SuggestedMax;