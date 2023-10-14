


import { Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { API } from '../service/api'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'


const Resetpassword = () => {

    // const {account , setAccount} = useContext(DataContext)


    const [forgotemail, setForgotEmail] = useState('')
    const [token, setToken] = useState('')

    const onemailchange = async (e) => {
        setForgotEmail(e.target.value)


    }

    

        
    

    const ForgotPassword = async () => {

        let response = await API.resetpassword({ email: forgotemail })
        if (response) {
            console.log("the rs is", response);
            
            setToken(response.data.token)
            console.log(response.data.token);
        }
        else {
            console.log('response not comming ');
        }


    }



    return (
        <div>


     
            <TextField label="enter your email" onChange={(e) => onemailchange(e)}></TextField>

            <Button onClick={() => ForgotPassword()}>submit</Button> <br /> <br />

{
    token?
    // <Button ><Link to={`/setpassword/${token}`}>submit</Link></Button>
    <Typography>see your mail box</Typography>
    :
    <Typography>wait </Typography>
}

        </div>
    )
}

export default Resetpassword
