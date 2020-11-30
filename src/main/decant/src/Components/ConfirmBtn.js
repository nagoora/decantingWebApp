import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {useGlobalState} from '../App';
import AlertDialog from './DialogModal';

const ConfirmBtn = React.memo(() => {

    const [state, dispatch] = useGlobalState();

    const handleClickModalOpen = () => {
        if(!state.lodnumError && !state.itemError){
            dispatch({modalDialogOpen: true})
        }
        
    }

     return(
        <Grid item xs={2}>
        <Box sx={{m:1 , pt:1}}>
            <Button variant="outlined" color="primary" size="large" onClick={handleClickModalOpen} >
                Confirm
            </Button>
        </Box>
        <AlertDialog />
        </Grid>

    );

})

export default ConfirmBtn;