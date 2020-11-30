import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AuthApi from '../Services/AuthApi'
import Cookies from 'js-cookie';
import { trackPromise } from 'react-promise-tracker'
import {useGlobalState} from '../App';


const SourceLpn = React.memo(() => {

    const [state, dispatch] = useGlobalState();

    const handleSourceLpnChange = e => {
        validateSourceLpn(e.target.value );
       
    }

    const validateSourceLpn = (srclpn) => {
        trackPromise(axios.get('/decanting/ws/cws/tosgGetInventoryIdentifierDetails?srclpn=' + srclpn,{
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin' : 'http://localhost:3000',
                'Access-Control-Allow-Credentials' : true
            },withCredentials: true ,
            credentials: 'include',
        }).then((response) =>{
             console.log("8080 response " +JSON.stringify(response.data));
              if(response.data.response.lodnum === srclpn){

                dispatch({ lodnum: response.data.response.lodnum, lodnumError:false })
    
                }else{
                    dispatch({ lodnum:srclpn, lodnumError:true })
                }
                
                })
            .catch((error) => {

                    console.log("error " , error)
                    dispatch({ lodnum:srclpn, lodnumError:true })

                }))
        

    };

    return(
        <TextField
                id="srclpn"
                label="Source Pallet LPN"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onBlur={handleSourceLpnChange}
                error={state.lodnumError}
                helperText={state.lodnumError ? 'Invalid Source Pallet LPN' : ''}
                required
                onChange={handleSourceLpnChange}
                value={state.lodnum}


            />
    )


})

export default SourceLpn;