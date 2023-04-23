
import React, { useContext, useState } from 'react'
const appContext = React.createContext();

const AppProvider = ({children})=>{

    // change the title of every page

    const changeTitle = (str) =>{
        return document.title = str;
    }

    // navbar toggle button----->
    const [show, setShow] = useState(false);

    const navToggle = ()=>{
     show? setShow(false) : setShow(true);
    }
    return(
        <appContext.Provider value={{navToggle,show,changeTitle}}>
            {children}
        </appContext.Provider>
    )
}

const useGlobalHook = ()=> useContext(appContext);

export {AppProvider, useGlobalHook};