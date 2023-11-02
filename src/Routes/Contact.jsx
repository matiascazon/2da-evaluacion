import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="px-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center font-bold mt-5 mb-3 uppercase">Contacto</h1>
      <Form/>
    </div>
  );
};

export default Contact;
