import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Cookies from 'js-cookie';

function LogoutBtn (){


    const handleLogoutFromSession = () => {
        localStorage.clear();
        Cookies.remove("user");
        window.location.reload();
        
    }

     return(
        <div>
            <Box sx={{m:2 , pt:1}}>
                <Button variant="outlined" color="primary" size="large" onClick={handleLogoutFromSession} >
                    LOGOUT 
                </Button>
            </Box>
        </div>


    );

}

export default LogoutBtn;