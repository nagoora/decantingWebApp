import './App.css';
import Decanting from './Components/Decanting'
import * as React from "react";

const initialGlobalState = {
  lodnum:'',
  lodnumError: false,
  item:'',
  itemError :false,
  itemDescription:'',
  itemImage:'',
  untcas:'',
  totalUnits:'',
  destinationZone:'',
  suggestedTote:'',
  suggestedToteMax:'',
  assetWgt:'',
  wrappingType:'',
  decantingInstructions:'',
  specialInstructions:''
};

export const GlobalStateContext = React.createContext(initialGlobalState);
export const DispatchStateContext = React.createContext(undefined);

/**
* Global State provider & hooks
*/
export const GlobalStateProvider = ({ children }) => {
const [state, dispatch] = React.useReducer(
(state, newValue) => ({ ...state, ...newValue }),
initialGlobalState
);
return (
<GlobalStateContext.Provider value={state}>
<DispatchStateContext.Provider value={dispatch}>
{children}
</DispatchStateContext.Provider>
</GlobalStateContext.Provider>
);
};

export const useGlobalState = () => [
React.useContext(GlobalStateContext),
React.useContext(DispatchStateContext)
];

export const App = () =>{

  return (
    <GlobalStateProvider>
      <div className="App">
        <Decanting />
      </div>
    </GlobalStateProvider>
  );
}
