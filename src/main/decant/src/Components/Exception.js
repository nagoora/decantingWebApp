import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {useGlobalState} from '../App';
import AlertDialog from './DialogModal';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';

const EceptionBtn = React.memo(() => {

    const [state, dispatch] = useGlobalState();

    const handleClickModalOpen = () => {
                
    }

     return(
        <div>
        <Box sx={{m:1 , pt:1}}>
            <Button variant="outlined" color="primary" size="large" onClick={handleClickModalOpen} >
                Eception
            </Button>
        </Box>
        <ExceptionDialog />
        </div>

    );

})

export default EceptionBtn;