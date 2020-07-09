import { useReducer, useEffect } from 'react'

function useLocalStorageReducer(key,defaulValue,reducer){

    const [state,dispatch]= useReducer(reducer,defaulValue,()=>{
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
    return [state,dispatch]
}
export default useLocalStorageReducer;