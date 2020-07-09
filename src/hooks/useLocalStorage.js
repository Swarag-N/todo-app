import { useState, useEffect } from 'react'

function useLocalStorage(key,defaulValue){

    const [state,setState]= useState(()=>{
        let value;
        try{
            value=JSON.parse(window.localStorage.getItem(key)||String(defaulValue))
        }catch(e){
            value=defaulValue
        }
        return value;
    })

    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state]);
    return [state,setState]
}
export default useLocalStorage;