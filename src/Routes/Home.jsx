import Card from "./../Components/Card";
import useFetch from "../hooks/useFetch";
import useStorage from "../hooks/useStorage";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {loading,state} = useFetch('https://jsonplaceholder.typicode.com/users',{})
  const a = true

  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-5 mb-3 uppercase">Profesionales</h1> 

      {loading ? 
        
        <div className=" flex items-center rounded-lg px-4 py-2 text-black absolute top-1/5 left-1/2 -translate-x-1/2">
          <svg className="mr-3 h-5 w-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Cargando...</p>
        </div> 
        : 
        <div className="grid grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {/* Aqui deberias renderizar las cards */}
          {state.data.map(user => (
            <Card
              key={user.id}
              user={user}
            />
          ))}
          
        </div>
        
        }

    </>
  );
};

export default Home;