

import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider'
import { API } from '../../service/api'

const GetProfile = () => {

  const { account, setAccount } = useContext(DataContext)

  const [getdata, setGetdata] = useState("")

  useEffect(() => {
    

    const getProfile = async () => {
     

      const response = await API.getprofile({ email: account.email })
      
      if (response.isSuccess) {
        console.log(response);
        setGetdata(response.data[0]);
      }

    }

    getProfile()

  }, [])

   console.log("th f n ",getdata);

  // 

  return (
    <div>

      <h1>this is get profile</h1>
    
      <h1>the data from db</h1>
       <h2>the email is , {getdata.email}</h2>
  <h2>the mobile no is , {getdata.mobileno}</h2>
   <h2>the gender is , {getdata.gender}</h2>

     
      

    </div>
  )
}

export default GetProfile
