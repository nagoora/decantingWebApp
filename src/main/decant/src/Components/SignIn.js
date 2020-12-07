import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AuthApi from '../Services/AuthApi'
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import {useGlobalState} from '../App';
import AlertDisplay from './AlertDisplay';

function SignIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [state, dispatch] = useGlobalState();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassWord(e.target.value);
    }

    const Auth = React.useContext(AuthApi);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("/decanting/ws/auth/login?usr_id="+ userName+"&password="+password,{
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Credentials' : true
            }, withCredentials: true ,
            credentials: 'include'
        })
                .then((response) =>{
                    console.log(response.data);
                    debugger;
                    if(response.data.warehouseId){
                        Cookies.set("user", "loginTrue");
                        localStorage.setItem("userName", userName);
                        localStorage.setItem("password", password);
                        localStorage.setItem("warehouseId", response.data.warehouseId);
                        console.log("Authenticated ");
                        Auth.setAuth(true);
                        dispatch({warehouseId: response.data.warehouseId})
                        dispatch(
                            {
                                alertShow:false,
                                alertSeverity:"",
                                alertMessage:"",
                            }
                        )
                    }else{
                         // this will log an empty object with an error property
                        console.log("Not Authenticated ");
                        Auth.setAuth(false);
                        Cookies.remove("user");
                        dispatch(
                            {
                                alertShow:true,
                                alertSeverity:"error",
                                alertMessage:response.data.statusMessage,
                            }
                        )
                    }
                    
                    
            })
            .catch((error) => {
                    debugger;
                    console.log({error}) // this will log an empty object with an error property
                    Auth.setAuth(false);
                    Cookies.remove("user");
                    dispatch(
                        {
                            alertShow:true,
                            alertSeverity:"error",
                            alertMessage:"There was an issue logging you into Decanting.",
                        }
                    )
                });
    }

        return(
            <Container maxWidth="sm" >
                <form onSubmit={handleSubmit} >
                    <h2 className="grey-text text-darken-3">
                        Sign In
                    </h2>
                    <div >
                        <TextField
                            id="userName"
                            label="User Name"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onBlur={handleUserNameChange}
                        />
                    </div>
                    <div >
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onBlur={handlePasswordChange}
                        />
                    </div>
                    <div >
                        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ margin: 15 }}>
                            Login
                        </Button>
                        <AlertDisplay />
                    </div>
                </form>
            </Container>
        )
}

export default SignIn;