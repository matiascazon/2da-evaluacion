//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail professional id </h1>
      <div>
        <img src="" alt="" />
        <div>
          <div>
            <h2>Datos</h2>
            <p>nombre</p>
            <p>Username</p>
            <p>email</p>
          </div>
          <div>
            <h2>Direccion: </h2>
            <p>calle: </p>
            <p>suite: </p>
            <p>ciudad: </p>
          </div>
          <div>
            <h2>Contacto</h2>
            <p>telefono: </p>
            <p>website: </p>
          </div>
          <div>
             <h2>Empresa</h2>
             <p>Nombre</p>
             <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
