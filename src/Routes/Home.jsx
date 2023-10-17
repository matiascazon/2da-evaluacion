// import Card from "../Components/Card";

import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "./../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal)

  return (
    <main className="">
      <h1>Home</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {/* Aqui deberias renderizar las cards */}

        {state.data.map(user => (
          <Card
            key={user.id}
            user={user}
          />
        ))}
        
      </div>
    </main>
  );
};

export default Home;
