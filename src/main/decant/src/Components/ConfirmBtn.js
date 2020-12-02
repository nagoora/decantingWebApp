import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {useGlobalState} from '../App';
import AlertDialog from './DialogModal';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';

const ConfirmBtn = React.memo(() => {

    const [state, dispatch] = useGlobalState();

    const handleClickModalOpen = () => {
        if(!state.destinationLpn){
            dispatch({destinationLpnError: true, destinationLpnErrorMsg: "Destination LPN required"})
        }else{
            dispatch({destinationLpnError: false, destinationLpnErrorMsg: ""})
        }
        if(!state.lodnumError && !state.itemError && !state.suggestedToteMaxError && !state.destinationLpnError){
            dispatch({modalDialogOpen: true})
        }
        
    }

     return(
        <div>
        <Box sx={{m:1 , pt:1}}>
            <Button variant="outlined" color="primary" size="large" onClick={handleClickModalOpen} >
                Confirm
            </Button>
        </Box>
        <AlertDialog />
        <SuccessModal />
        <ErrorModal />
        </div>

    );

})

export default ConfirmBtn;