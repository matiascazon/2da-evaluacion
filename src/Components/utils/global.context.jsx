import { createContext, useEffect, useReducer } from "react";

export const initialState = {
    theme: "",
    data: [], 
    favs: JSON}

export const ContextGlobal = createContext(undefined);

//funcion reductora para actualizar el estado
const reducer = (state,action) => {
  switch(action.type){
    case 'GET_USERS':
      return{
        ...state,
        data: action.payload, //actualiza los datos consumidos de la api
      }
    case 'ADD_FAV':
      return{
        ...state,
        favs: state.favs, //actualiza el estado de los profesionales favoritos 
      }
  }
}

export const ContextProvider = ({ children }) => {

   // Utiliza useReducer para inicializar el estado global con el initialState y el reducer(funcion)
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
