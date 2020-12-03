import './App.css';
import Decanting from './Components/Decanting'
import * as React from "react";
import Cookies from 'js-cookie';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AuthApi from './Services/AuthApi';
import SignIn from './Components/SignIn'

const initialGlobalState = {
  warehouseId: 'WIAW',
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
  toteLevel:'',
  successModal:false,
  errorModal:false,
  errorMessage:'',
  alertShow:false,
  alertSeverity:"",
  alertMessage:"",
  exception:"",
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

  const [auth, setAuth] = React.useState(false);
  const readCookie =() =>{
  const user = Cookies.get("user");
    if(user){
      setAuth(true);
    }
  }

  React.useEffect (()=> {
    readCookie();
  }, [])

  return (

    <GlobalStateProvider>
      <div className="App">
      <AuthApi.Provider value={{auth, setAuth}}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthApi.Provider>
      </div>
      </GlobalStateProvider>    
    
  );
}

const Routes =() => {
  const Auth = React.useContext(AuthApi);
  return(
    <Switch>
      <ProtectedRoute exact path='/Decanting' auth={Auth.auth} component={Decanting} />
      <ProtectedLogin path='/Signin' auth={Auth.auth} component={SignIn} />
  </Switch>
  )
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render ={()=> auth ? (
        <Component />
        ) :
        (
          <Redirect to='/Signin' />
        )
      }
    />
  )
}

const ProtectedLogin = ({auth, component:Component, ...rest}) => {
  return(
    <Route 
      {...rest}
      render ={()=> !auth ? (
        <Component />
        ) :
        (
          <Redirect to='/Decanting' />
        )
      }
    />
  )
}
