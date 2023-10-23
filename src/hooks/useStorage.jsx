import React from 'react'

const useStorage = (tipo) => {
    
    const saveFav = (key,value) => { //guarda un profesional bajo una clave(key) especifica
        const favs = []
        favs.push(JSON.parse(localStorage.getItem(key)))
        
        if(value === null || value === undefined){
            return
        } 
            
        
        favs.push(value)
        console.log(favs)
        return tipo === "localStorage" ? localStorage.setItem(key, JSON.stringify(favs)) : sessionStorage.setItem(key, parsedItem) //segun el tipo guarda en el local o session storage
    }

    const getFav = (key,esString) => {
        const data = tipo === 'localStorage' ? localStorage.getItem(key) : sessionStorage.getItem(key)

        return esString ? data : JSON.parse(data)
    }

    return {saveFav,getFav}
}

export default useStorage
