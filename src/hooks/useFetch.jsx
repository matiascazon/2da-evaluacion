import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';

const useFetch = (url,options) => {
    const {dispatch,state} = useContext(ContextGlobal)
    const [loading,setLoading] = useState(false)
    
    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(url,options)
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json()

            // Utiliza dispatch para actualizar el estado con los datos de usuarios
            dispatch({type:'GET_USERS',payload: data})
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    },[url])

    
    useEffect(() => {
        fetchData()
    },[fetchData])    

    return {loading,state}
}

export default useFetch
