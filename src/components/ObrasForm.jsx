import { useForm } from "react-hook-form"

export const ObrasForm = () => {

  const { register } = useForm()
  
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
                  />
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Cliente 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Cliente" 
                />
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
              />
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha de Inicio 
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                />
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Descripción 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Descripción de la Obra" 
                ></textarea>
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