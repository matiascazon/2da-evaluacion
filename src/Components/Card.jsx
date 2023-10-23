import { useNavigate } from 'react-router-dom';
import img from './../images/doctor.jpg'
import useStorage from '../hooks/useStorage';


const Card = ({user}) => {
  const navigate = useNavigate()
  const {saveFav} = useStorage('localStorage')
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    saveFav('favoritos',user)
  };

  return (
    <div className={`relative w-60 border-neutral-400 bg-gray-100 py-2 px-3 rounded-md hover:bg-gray-200 hover:scale-105 hover:transition-transform`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      
      <img src={img} alt="foto de perfil" className='rounded-md cursor-pointer' onClick={() => navigate(`/detalles/${user.id}`)}/>
      
      <div className='flex flex-col items-center justify-start'>
        <p className='text-lg my-2 font-semibold'>
          {user.name}
        </p>
        <p className=' text-lg mb-2'>
          {user.username}
        </p>
        <p className='absolute top-2 right-5'>
          {user.id}
        </p>
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
