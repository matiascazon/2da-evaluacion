import useStorage from "../hooks/useStorage";
import Card from "../Components/Card";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {getFav,saveFav} = useStorage('sessionStorage')
  
  const guardados = getFav('favoritos',false) //obtiene los favoritos de sessionStorage y le indica que no es String

  // const [favoritos,setFavoritos] = useState(JSON.parse(guardados))
  const {state,dispatch} = useContext(ContextGlobal)

  const deleteFav = (id) => {
    const newFavs = favoritos.filter((favorito) => favorito.id !== id)
  
    // dispatch({type:'DELETE_FAV',payload:newFavs})
  }


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {
          state.map((favorito) => (
            <Card
              key={favorito.id}
              user={favorito}
            ></Card>
          ))
        }
      </div>
    </>
  );
};

export default Favs;
