import React, {useState, createRef, useEffect} from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {useGlobalState} from '../App';


const PutawayTote = React.memo(() => {

  const [allPutawayTotes, setAllPutawayTotes] = useState([]);
  const [selectedTote, setSelectedTote] = useState("");
  const [state, dispatch] = useGlobalState();
  let putawayToteOptions =[];
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    console.log(" useEffect of PutawayTote gets called")
    axios.get('/decanting/ws/cws/tosgListPutawayTotes?wh_id=WIAW' ,{
      withCredentials: true ,
      credentials: 'include'
    }).then((response) => {
      setAllPutawayTotes(response.data.putawayTote);
      putawayToteOptions = response.data.putawayTote.map(function(tote, index) {
                                                        return {key:tote.asset_typ, value:tote.lngdsc};
                            })
                            setLoading(false);

    })
},[]);

 
  const handelPutatwayToteChange = (e) => {

    dispatch({ suggestedTote: e.target.value});
    setSelectedTote(e.target.value);
    console.log("handelPutatwayToteChange " , e.target)

  }
        return (
            <FormControl variant="outlined" style={{margin:8, minWidth: 270}}>
            <InputLabel id="suggested-tote-label">Suggested Tote</InputLabel>
                <Select
                labelId="suggested-tote-label"
                id="suggested-tote"
                name="suggestedTote"
                label="Suggested Tote*"
                onChange={handelPutatwayToteChange}
                value={state.suggestedTote === null ? "" : state.suggestedTote}
                >
                  {allPutawayTotes.map(tote => {
                      return(
                        <MenuItem key={tote.asset_typ} value={tote.lngdsc}> {tote.lngdsc} </MenuItem>
                      )
                  })

                  }
                </Select>
            </FormControl>
        );

});

export default PutawayTote;

