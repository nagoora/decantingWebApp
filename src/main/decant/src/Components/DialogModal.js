import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useGlobalState} from '../App';


export default function AlertDialog() {
 
  const [state, dispatch] = useGlobalState();

  const handleClose = () => {
    dispatch({modalDialogOpen: false})
  };

  const handleConfirmMoveInventory = () => {
    axios.post("/decanting/moveInventory", state)
    .then((response) =>{
        console.log("Request POSTED ", JSON.stringify(response.data))
        if(response.data === "success"){
            dispatch(
                {   lodnumError: false,
                    item:'',
                    itemError :false,
                    itemDescription:'',
                    itemImage:'',
                    untcas:'',
                    totalUnits:'',
                    destinationZone:'',
                    suggestedTote:'',
                    suggestedToteMax:'',
                    suggestedToteMaxError: false,
                    suggestedToteMaxErrorMsg:'',
                    assetWgt:'',
                    wrappingType:'',
                    decantingInstructions:'',
                    specialInstructions:'',
                    modalDialogOpen: false,
                    destinationLpn:'',
                    destinationLpnError:false,
                    destinationLpnErrorMsg:'',
                    toteLevel:''
                }
            )
            dispatch({modalDialogOpen: false})
            dispatch({successModal: true})
            getSuccessCountTimeout();
        }else{
            dispatch({modalDialogOpen: false})
            dispatch({errorModal: true, errorMessage: JSON.stringify(response.data)})
        }
    })

  };

  const getSuccessCountTimeout = () => {
    setTimeout(() => {
        dispatch({successModal: false})
      }, 3000);
  };


  return (
    <div>
      <Dialog
        open={state.modalDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Move Inventory"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to move {state.suggestedToteMax} into {state.destinationLpn} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={handleConfirmMoveInventory} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
