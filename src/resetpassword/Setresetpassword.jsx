


import React, { useState } from 'react'
import { API } from '../service/api'
import { Button, TextField } from '@mui/material'
import { Link, useParams } from 'react-router-dom'

const Setresetpassword = () => {

    const [resetpassword, setResetpassword] = useState('')
    const { token } = useParams()
    console.log("up t",token);


    const onsetpassword = (e) => {

        setResetpassword(e.target.value)

    }

    const setPassword = async () => {
        let response = await API.setpassword({
            password: resetpassword,
            resetToken: token
        })
        console.log(response)


    }



    return (
        <div>
            <TextField label="enter new password " onChange={(e) => onsetpassword(e)}></TextField>

            <Button onClick={() => setPassword()}>reset</Button>


        </div>
    )
}

export default Setresetpassword
