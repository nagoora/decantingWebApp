import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import {useGlobalState} from '../App';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts() {
  const classes = useStyles();
  const [state, dispatch] = useGlobalState();

  return (
    <div className={classes.root}>
      <Collapse in={state.alertShow}>
        <Alert  severity={state.alertSeverity} variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(
                  {
                      alertShow:false,
                      alertSeverity:"",
                      alertMessage:"",
                  }
              )
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {state.alertMessage}
        </Alert>
      </Collapse>
    </div>
  );
}