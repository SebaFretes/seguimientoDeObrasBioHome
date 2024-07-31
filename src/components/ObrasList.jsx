import { useObraStore } from "../store"

export const ObrasList = () => {

  const obras = useObraStore(state => state.obras);
  const deleteObra = useObraStore(state => state.deleteObra);
  const editObra = useObraStore(state => state.editObra);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen">
      {/* overflow-y-scroll */}
      {obras.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de Obras</h2>
          <p className="text-center text-lg mt-5 mb-10">Administrá tus <span className="font-bold text-indigo-500">Obras y Clientes</span></p>
          {obras.map(item => (
            <div key={item.id} className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
              <p className="font-bold mb-3 uppercase text-gray-700">Obra: <span className="font-normal normal-case">{item.name}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Cliente: <span className="font-normal normal-case">{item.client}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Email: <span className="font-normal normal-case">{item.email}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Fecha de inicio: <span className="font-normal normal-case">{item.date}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Descripción: <span className="font-normal normal-case">{item.description}</span></p>
              <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button type="button"
                  className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
                  onClick={() => editObra(item.id)}>
                  Editar
                </button>
                <button type="button"
                  className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                  onClick={() => deleteObra(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          )
          )}

        </>
      ) : (
        <h2 className="text-3xl font-black text-center">No hay obras</h2>
      )}
    </div>
  )
}
