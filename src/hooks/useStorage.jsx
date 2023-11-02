import React from 'react'

const useStorage = (tipo) => {
    
    const saveFav = (key,value) => { //guarda un profesional bajo una clave(key) especifica
        if(value === null || value === undefined){
            return
        } 
        const favs = getFavs(key) || []
        
        favs.push(value)
        
        tipo === "localStorage" ? localStorage.setItem(key, JSON.stringify(favs)) : sessionStorage.setItem(key, JSON.stringify(favs)) //segun el tipo guarda en el local o session storage
       
    }

    const getFavs = (key) => {
        const data = tipo === 'localStorage' ? localStorage.getItem(key) : sessionStorage.getItem(key)
        return JSON.parse(data)
    }

    const deleteFav = (key,id) => {
        
        if(id === null || id === undefined) {
            return
        }

        const favs = JSON.parse(localStorage.getItem(key)) || []

        const newFavs = favs.filter((fav) => (fav.id !== id))

       tipo === "localStorage" ? localStorage.setItem(key, JSON.stringify(newFavs)) : sessionStorage.setItem(key, JSON.stringify(newFavs)) //segun el tipo guarda en el local o session storage
    }

    return {saveFav,getFavs,deleteFav}
}

export default useStorage
