import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from  '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useGlobalState} from '../App';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

 export default function SuccessModal() {
  const [state, dispatch] = useGlobalState();
  const classes = useStyles();

  const handleClose = () => {
    dispatch({successModal:false})
  };

  return (
    <div className={classes.root}>
    <Dialog
      open={state.successModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
                    timeout: 5,
                }}
    >
      <DialogTitle id="alert-dialog-title"></DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">

        <Alert variant="filled" severity="success">
            <AlertTitle><strong>Success</strong></AlertTitle>
            <strong>Item has been decanted successfully !</strong>
        </Alert>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        
        
      </DialogActions>
    </Dialog>
  </div>
  );
}