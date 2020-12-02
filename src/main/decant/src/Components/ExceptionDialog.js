import React, {useState, createRef, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { blue } from '@material-ui/core/colors';
import {useGlobalState} from '../App';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});



function ExceptionDialog(props) {
    const [state, dispatch] = useGlobalState();
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [decantExceptionList, setDecantExceptionList] = useState([]);

  useEffect(() =>{
    console.log(" useEffect of ExceptionDialog gets called")
    axios.get('/decanting/ws/cws/tosgGetDecantingExceptionList?reagrp=DECANT' , {
      headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Credentials' : true,
          'username' : localStorage.getItem("userName"),
          'password' : localStorage.getItem("password")
      },withCredentials: true ,
      credentials: 'include',
  }).then((response) => {
        setDecantExceptionList(response.data.decantingExceptionList);

    })
},[]);

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose Exception Reason</DialogTitle>
      <List>
        {decantExceptionList.map((decantException) => (
           
          <ListItem button onClick={() => handleListItemClick(decantException.reacod)} key={decantException.reacod}>
             <Divider variant="fullWidth">  
                <ListItemText primary={decantException.reacod_dsc} />
            </Divider>
          </ListItem>
         
        ))}
      </List>
    </Dialog>
  );
}

ExceptionDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ExceptionDialogBtn() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const [state, dispatch] = useGlobalState();
  

  const handleClickOpen = () => {
    if(state.lodnum !== "" && state.item != ""){
        setOpen(true);
        dispatch(
            {
                alertShow:false,
                alertSeverity:"",
                alertMessage:"",
            }
        )
    }else{
        dispatch(
            {
                alertShow:true,
                alertSeverity:"error",
                alertMessage:"Please Enter Source Pallet LPN and Item before logging an Exception",
            }
        )
    }
    
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
        <Box sx={{m:2 , pt:1}}>
            <Button variant="outlined" color="primary" size="large" onClick={handleClickOpen}>
                Exception
            </Button>
            <ExceptionDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </Box>
    </div>
  );
}