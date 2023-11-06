//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useEffect, useState } from "react";
import image from "./../images/doctor.jpg"
import { useParams } from "react-router-dom";
import useStorage from "../hooks/useStorage";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const {saveFav,getFavs,deleteFav} = useStorage('localStorage')
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    };

    obtenerUsuario()
  }, [id])


  const toggleFav = () => {
    if (isFav) {
      deleteFav('favoritos', user.id);
    } else {
      saveFav('favoritos', user);
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    const favoritos = getFavs('favoritos');
    setIsFav(!!favoritos && favoritos.some((fav) => fav?.id === user?.id));
  }, [user]);

  return (  
    <>
      {
        loading ? 
        <></> 
        : 
        <>
          <h1 className="text-2xl text-center font-bold mt-5 mb-3 uppercase">Detalles</h1>
          <div className="m-2 rounded-2xl sm:flex sm:justify-center">
            <img src={image} alt="Foto de perfil del profesional" className="rounded-t-2xl sm:w-1/2 sm:rounded-l-3xl sm:rounded-tr-none md:min-h-min" />
            <div className=" px-4 py-2 rounded-b-3xl bg-gray-50 flex flex-col gap-y-6 rounded-r-3xl sm:rounded-bl-none">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-3xl text-black text-left my-1">{user.name}</h2>
                <div className="flex gap-x-2 sm:flex-col sm:gap-y-2">
                  <p className="font-semibold text-lg my-1">Username: <span className=" text-gray-500">{user.username}</span></p>
                  <p className="font-semibold text-lg my-1">email: <span className=" text-gray-500">{user.email}</span></p>
                </div>
              </div>
              <div className="flex justify-between sm:flex-col sm:gap-y-6">
                <div>
                <h2 className="font-bold text-xl my-1">Contacto</h2>
                  <p className="font-semibold text-lg my-1">Télefono: <span className=" text-gray-500">{user.phone}</span></p>
                  <p className="font-semibold text-lg my-1">Website: <span className=" text-blue-600 cursor-pointer">{user.website}</span></p>
                </div>
                <div>
                  <h2 className="font-bold text-xl my-1">Empresa</h2>
                  <p className="my-1 text-gray-500 font-semibold text-lg">{user.company.name}</p>
                  <p></p>
                </div>
              </div>

              <button onClick={toggleFav} className="favButton">
                {isFav ? "❤" : "💔"}
              </button>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Detail;
