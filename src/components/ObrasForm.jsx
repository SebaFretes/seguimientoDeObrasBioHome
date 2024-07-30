import { useForm } from "react-hook-form"
import { Error } from "./Error";

export const ObrasForm = () => {

  const { register, handleSubmit, formState:{errors} } = useForm();

  const registerObra = () => {
    console.log('nueva obra');
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Obras</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añadí Obras y {''}
            <span className="text-indigo-500 font-bold">Administrálos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerObra)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Obra 
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre de la Obra"
                      {...register('name', {
                        required: 'Este campo debe ser completado' 
                      })}
                  />
                  {errors.name && <Error> {errors.name?.message} </Error>}
                  
              </div>

              <div className="mb-5">
                <label htmlFor="client" className="text-sm uppercase font-bold">
                    Cliente 
                </label>
                <input  
                    id="client"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Cliente"
                    {...register('client', {
                        required: 'Este campo debe ser completado' 
                    })} 
                />
                {errors.client && <Error> {errors.client?.message} </Error>}
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3  border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro"
                  {...register("email", {
                    required: "El Email es Obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email No Válido'
                    }
                  })} 
              />
              {errors.email && <Error> {errors.email?.message} </Error>}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha de Inicio 
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date"
                    {...register('date', {
                        required: 'Indicar fecha de inicio de la obra' 
                    })} 
                />
                {errors.date && <Error> {errors.date?.message} </Error>}
            </div>
            
            <div className="mb-5">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                Descripción 
                </label>
                <textarea  
                    id="description"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Descripción de la Obra"
                    {...register('description', {
                        required: 'Este campo debe ser completado' 
                    })} 
                ></textarea>
                {errors.description && <Error> {errors.description?.message} </Error>}
            </div>

            <input
                type="submit"
                className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Registrar'
            />
        </form> 
    </div>
  )
}