import { createContext, useReducer } from "react";

export const initialState = {
    theme: "",
    data: [], 
  }

export const ContextGlobal = createContext(undefined);

//funcion reductora para actualizar el estado
const reducer = (state,action) => {
  switch(action.type){
    case 'GET_USERS':
      return{
        ...state,
        data: action.payload, //actualiza los datos consumidos de la api
      }
    case 'CHANGE_THEME':
      return{
        ...state,
        theme: action.payload
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
