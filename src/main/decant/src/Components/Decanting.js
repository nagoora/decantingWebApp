import React, {useRef, useEffect, Component, useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import SourceLpn from './SourceLpn';
import Item from './Item';
import { CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PutawayTote from './PutawayTote';
import LoadingIndicator from './LoadingIndicator';
import ConfirmBtn from './ConfirmBtn';
import {useGlobalState} from '../App';
import SuggestedMax from './SuggestedMax'

const useStyles = theme => ({
    root: {
            marginRight: 8,
            "& .MuiInputBase-root.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.9)" // (default alpha is 0.38)
            }
        }
    });

const Decanting = React.memo(() => {

    const [state, dispatch] = useGlobalState();
    const classes = useStyles();

    return (
        <Container >
            <Grid item xs={10}>
                <SourceLpn tabIndex='0'/>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Box sx={{m:1, pt:1}}>
                        
                    <CardMedia width="250" height="250" component='img' src={state.itemImage} />
                    </Box>
                </Grid>    

                <Grid item xs={3}>
                   <Item tabIndex='1'/>

                    <TextField
                        id="item-description"
                        label="Item Description"
                        style={{ margin: 8}}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={state.itemDescription}
                        disabled
                    />

                    <TextField
                        id="pick-zone"
                        label="Designated Pick Zone"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={state.destinationZone}
                        disabled
                       
                    />

                    <TextField
                        id="wrapping-type"
                        label="Wrapping Type"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        disabled
                        value={state.wrappingType}
                       
                    />

                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="total-units"
                        label="Total Units"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={state.totalUnits}
                        disabled
                       
                    />

                    <TextField
                        id="num-of-lbls"
                        label="Number of Labels To Print"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value ="2"
                        tabIndex = "-1"
                    />

    

                    <PutawayTote  />
       

                    <TextField
                        id="actual-tote-wt"
                        label="Actual Tote Weight"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={state.assetWgt}
                        disabled
                       
                    />
                </Grid>
                
                <Grid item xs={2}>
                    <TextField
                        id="untcas"
                        label="Units Per Case"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={state.untcas}
                        disabled
                       
                    />
        
                    <Box sx={{m:1, pt:1}} >
                        <Button variant="outlined" color="primary" size="large" >
                            Print
                        </Button>
                    </Box>
                    <Box sx={{m:0.6 , pt:0.1}}>

                    </Box>

                    <SuggestedMax />

                    <FormLabel component="legend">Tote Level</FormLabel>
                    <RadioGroup row aria-label="Tote Level" name="tote-level">
                        <FormControlLabel value="0" control={<Radio color="primary" />} label="Partial" />
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Full" />
                    </RadioGroup>
    
                </Grid>          
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <LoadingIndicator/>
                <TextField 
                        id="destination-lpn"
                        label="Destination Pallet LPN"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        multiline
                        required
                    />

                <TextField 
                        id="decanting-instructions"
                        label="Decanting Instructions"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        multiline
                        value={state.decantingInstructions}
                    />

                <TextField 
                        id="special-instructions"
                        label="Special Instructions"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        multiline
                        value={state.specialInstructions}
                        
                    />
                </Grid>
                <ConfirmBtn />
            </Grid>
        </Container>
        )
    }

);



export default withStyles(useStyles)(Decanting); 