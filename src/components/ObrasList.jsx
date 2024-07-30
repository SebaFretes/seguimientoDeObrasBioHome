import { useObraStore } from "../store"

export const ObrasList = () => {

  const obras = useObraStore(state => state.obras);

  // console.log(obras);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {obras.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de Obras</h2>
          <p className="text-center text-3xl mt-5 mb-10">Administrá tus <span className="font-bold text-indigo-500">Obras y Clientes</span></p>
          {obras.map(item => (
            <div key={item.id}>
              {item.name}
              {item.description}
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
