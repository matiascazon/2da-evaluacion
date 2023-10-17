import { createContext, useEffect, useReducer } from "react";

export const initialState = {theme: "", data: [], loading: false}

export const ContextGlobal = createContext(undefined);

//funcion reductora para actualizar el estado
const reducer = (state,action) => {
  switch(action.type){
    case 'GET_USERS':
      return{
        ...state,
        data: action.payload, //actualiza los datos consumidos de la api
        loading: false,
      }
  }
}

export const ContextProvider = ({ children }) => {

   // Utiliza useReducer para inicializar el estado global con el initialState y el reducer(funcion)
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(() => { //Realiza una solicitud a la api cuando el componente se monta
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json()
      
      // Utiliza dispatch para actualizar el estado con los datos de usuarios
      dispatch({type: 'GET_USERS',payload: result})
    }

    getUsers()
  },[])



  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
