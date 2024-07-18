import { ObrasForm } from "./components/ObrasForm"
import { ObrasList } from "./components/ObrasList"

export const App = () => {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">Seguimiento de <span className="text-indigo-500">Obras</span></h1>
        
        <div className="mt-12 md:flex">
          <ObrasForm />
          <ObrasList />
        </div>
      </div>
    </>
  )
}
