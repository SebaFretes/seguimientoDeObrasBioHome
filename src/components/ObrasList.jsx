import { useObraStore } from "../store"

export const ObrasList = () => {

  const obras = useObraStore(state => state.obras);

  // console.log(obras);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {obras.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de Obras</h2>
          <p className="text-center text-lg mt-5 mb-10">Administrá tus <span className="font-bold text-indigo-500">Obras y Clientes</span></p>
          {obras.map(item => (
            <div key={item.id} className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
              <p className="font-bold mb-3 uppercase text-gray-700">Obra: <span className="font-normal font-case">{item.name}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Cliente: <span className="font-normal font-case">{item.client}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Email: <span className="font-normal font-case">{item.email}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Fecha de inicio: <span className="font-normal font-case">{item.date}</span></p>
              <p className="font-bold mb-3 uppercase text-gray-700">Descripción: <span className="font-normal font-case">{item.description}</span></p>
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
