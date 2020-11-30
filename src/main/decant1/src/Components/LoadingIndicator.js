import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner'
import Modal from './Modal';

function LoadingIndicator (){

  const { promiseInProgress } = usePromiseTracker({delay:500});

  return(
    promiseInProgress && (
      <div
        style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
        }}
      >
      <Modal show="true">
         <Loader type="ThreeDots" color="#6495ED" height="100" width="100" />    
      </Modal>
        
      </div>)
    
  );
}

export default LoadingIndicator;