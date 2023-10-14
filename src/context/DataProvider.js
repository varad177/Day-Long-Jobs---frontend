import {createContext , useState} from 'react'


export const DataContext = createContext(null)
//context banaya 

//ab state banayenge , aur usme infio store karenge 

const DataProvider = ({children}) =>{

    const [account , setAccount ] = useState({email:"" , fullname:"" , gender:"" })

    return (

        <DataContext.Provider value={{
            account , 
            setAccount
        }}>
        {children}
        

        </DataContext.Provider>



    )
}

export default DataProvider
