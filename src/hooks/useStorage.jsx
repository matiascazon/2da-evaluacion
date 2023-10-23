import React from 'react'

const useStorage = (tipo) => {
    
    const saveFav = (key,value) => { //guarda un profesional bajo una clave(key) especifica
        if(value === null || value === undefined) return

         // si el valor es de tipo string. Si no lo es, lo convertimos usando JSON.stringify
        const parsedItem = (typeof value !== "string" ? JSON.stringify(value) : value)

        return tipo === "localStorage" ? localStorage.setItem(key, parsedItem) : sessionStorage.setItem(key, parsedItem) //segun el tipo guarda en el local o session storage
    }

    const getFav = (key,esString) => {
        const data = tipo === 'localStorage' ? localStorage.getItem(key) : sessionStorage.getItem(key)

        return esString ? data : JSON.parse(data)
    }

    return {saveFav,getFav}
}

export default useStorage
