import { ToastContainer } from "react-toastify"
import { ObrasForm } from "./components/ObrasForm"
import { ObrasList } from "./components/ObrasList"
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">Seguimiento de Obras <span className="text-indigo-500">BioHome</span></h1>

        <div className="mt-12 md:flex">
          <ObrasForm />
          <ObrasList />
        </div>
      </div>
      <ToastContainer />

      <footer className="py-4 bg-indigo-500">
        <p className="text-center text-2xl font-black">
          Desarrollado por <a href="https://github.com/SebaFretes/" target="_blank"><span className="text-white uppercase">Sebastian Fretes</span></a>
        </p>
      </footer>
    </>
  )
}
