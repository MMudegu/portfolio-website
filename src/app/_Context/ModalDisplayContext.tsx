'use client'
import { createContext, useContext, ReactElement } from "react";
import { useState } from "react";

interface ModalDisplayContextType{
    modalDisplay: boolean,
    setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>,
}

const initContext = {
    modalDisplay:false,
    setModalDisplay: ()=>{}
}

const ModalDisplayContext  = createContext<ModalDisplayContextType>(initContext);


type childrenType = {
    children?: ReactElement | undefined,
}


export default function ModalDisplayContextProvider({children}:childrenType){

    const [modalDisplay,setModalDisplay] = useState(false);

    return <ModalDisplayContext.Provider value={{modalDisplay,setModalDisplay}}>
        {children}
    </ModalDisplayContext.Provider>
}

export const useModalDisplayContext = ()=>useContext(ModalDisplayContext);