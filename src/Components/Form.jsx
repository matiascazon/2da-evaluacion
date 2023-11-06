import useForm from "../hooks/useForm";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const initialForm = {
    nombre: '',
    email: ''
  }

  const validate = (form) => {
    let errors= {}
    let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
 
  
    if (!form.nombre.trim()) {
      errors.nombre = "El campo 'Nombre' es requerido";
    } else if (!regexNombre.test(form.nombre.trim())) {
      errors.nombre = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }
  
    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }
  
    return errors
  }
  const {
    form,
    errors,
    loading,
    handleBlur,
    handleChange,
    handleSubmit
  } = useForm(validate,initialForm)
  console.log(errors)
  return (
    <> 
      <form onSubmit={handleSubmit} className="w-full h-full max-w-3xl px-3 rounded-md bg-gray-100 flex flex-col dark:bg-neutral-800">
        <h2 className="text-center text-xl font-semibold my-6">Información Personal</h2>
        <label htmlFor="nombre" className='ml-3 mb-1 text-gray-500 font-normal'>Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          className={`h-8 mb-3 rounded-md pl-2 border-2 ${errors.nombre ? 'border-red-700' : 'border-green-700'}`} 
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombre}
          />
        {/* {errors.nombre && <div className=" bg-red-500 text-white rounded-md font-semibold h-10 w-full text-center py-2">{errors.nombre}</div>} */}
        <label htmlFor="email" className=" ml-3 mb-1 text-gray-500 font-normal">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          className={`h-8 mb-3 rounded-md pl-2 border-2 ${errors.email ? 'border-red-700' : 'border-green-700'}`} 
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          />
        {/* {errors.email && <div className=" bg-red-500 text-white rounded-md font-semibold h-10 w-full text-center py-2 mt-2">{errors.email}</div>} */}
        <button 
          type="submit" 
          className="relative h-10 my-6 w-36 text-center self-center bg-indigo-400 text-white font-medium rounded-md hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800"
          disabled={loading ? true : false}
        > 
          {loading ? 
            <div className=" flex items-center rounded-lg px-4 py-2 text-white">
              <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p>Enviando...</p>
            </div> : 
              'Enviar'
            }
        </button>
      </form>
    </>
  );
};

export default Form;
