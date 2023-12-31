import useStorage from "../hooks/useStorage";
import Card from "../Components/Card";
import { useEffect, useState } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {getFavs} = useStorage('localStorage') 

  const [favs,setFavs] = useState(getFavs('favoritos'))

  useEffect(()=>{
    setFavs(getFavs('favoritos'))
  },[getFavs])


  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-5 mb-3 uppercase">Favoritos</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {
          favs?.map((favorito) => (
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
