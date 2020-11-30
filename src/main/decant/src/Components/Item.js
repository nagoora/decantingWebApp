import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AuthApi from '../Services/AuthApi'
import Cookies from 'js-cookie';
import { trackPromise } from 'react-promise-tracker'
import {useGlobalState} from '../App';

const Item = React.memo(() => {

    const [state, dispatch] = useGlobalState();


    const handleItemChange =e =>{
        if(e.target.value!=""){
          validateItem(e.target.value);
          
        }else{
            dispatch(
                {
                    item:e.target.value,
                    itemError :true,
                    itemDescription:'',
                    itemImage:'',
                    ustcas:'',
                    totalUnits:'',
                    destinationZone:'',
                    suggestedTote : '',
                    suggestedToteMax:'',
                    assetWgt: '',
                    wrappingType: '',
                    decantingInstructions:'',
                    specialInstructions: ''
              }
            )
        }
    }


    const validateItem = (item) =>{
        trackPromise(
          axios.get('/decanting/ws/cws/tosgGetItemQtyOnLodnum?lodnum=' + state.lodnum +'&prtnum='+ item +'&wh_id=WIAW',{
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin' : 'http://localhost:3000',
                'Access-Control-Allow-Credentials' : true
            },withCredentials: true ,
            credentials: 'include',
        }).then((response) =>{
              if(response.data.response.prtnum ){
                console.log("response " , response.data.response)
                dispatch(
                    {  
                        item: response.data.response.prtnum,
                        itemError :false,
                        itemDescription: response.data.response.item_description,
                        itemImage:response.data.response.img_src,
                        untcas : response.data.response.untcas,
                        totalUnits: response.data.response.total_units,
                        destinationZone: response.data.response.movement_zone,
                        suggestedTote: response.data.response.tote,
                        suggestedToteMax: response.data.response.suggested_max_units,
                        assetWgt: response.data.response.asset_wgt,
                        wrappingType:response.data.response.wrapping_type,
                        decantingInstructions: response.data.response.decanting_instructions,
                        specialInstructions: response.data.response.special_instructions
                    }
                )

                if(parseInt(response.data.response.suggested_max_units) > parseInt(response.data.response.total_units)){
                    console.log("state.totalUnits ", state.totalUnits)
                    console.log("state.suggestedToteMax ", state.suggestedToteMax)
                    dispatch({ suggestedToteMaxError:true, suggestedToteMaxErrorMsg: "Cannot move qty greater than Total Units" })
                }
    
                }else{
                    dispatch(
                        {
                            item:item,
                            itemError :true,
                            itemDescription:'',
                            itemImage:'',
                            ustcas:'',
                            totalUnits:'',
                            destinationZone:'',
                            suggestedTote : '',
                            suggestedToteMax:'',
                            assetWgt: '',
                            wrappingType: '',
                            decantingInstructions:'',
                            specialInstructions: ''
                      }
                    )
                }
                
                })
            .catch((error) => {
                console.log("ERROR CATCH PART" + error);
                dispatch(
                    {
                        item:item,
                        itemError :true,
                        itemDescription:'',
                        itemImage:'',
                        ustcas:'',
                        totalUnits:'',
                        destinationZone:'',
                        suggestedTote : '',
                        suggestedToteMax:'',
                        assetWgt: '',
                        wrappingType: '',
                        decantingInstructions:'',
                        specialInstructions: ''
                  }
                )
                })
        )
  
      }

    return(
        <TextField
        id="item"
        label="Item"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        required
        onBlur={handleItemChange}
        error={state.itemError}
        helperText={state.itemError ? 'Invalid Item' : ''}
        value={state.item}
        onChange={handleItemChange}

    />

    );

})

export default Item;