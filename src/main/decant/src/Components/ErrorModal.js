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

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

 export default function ErrorModal() {
  const [state, dispatch] = useGlobalState();
  const classes = useStyles();

  const handleClose = () => {
    dispatch({errorModal:false, errorMessage:""})
  };

  return (
    <div className={classes.root}>
    <Dialog
      open={state.errorModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title"></DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">

        <Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{state.errorMessage}</strong>
        </Alert>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        
      </DialogActions>
    </Dialog>
  </div>
  );
}