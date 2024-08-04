import { useForm } from "react-hook-form"
import { Error } from "./Error";
import { useObraStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ObrasForm = () => {

    const addNewObra = useObraStore(state => state.addNewObra);
    const obras = useObraStore(state => state.obras);
    const activeId = useObraStore(state => state.activeId);
    const updateObra = useObraStore(state => state.updateObra);

    useEffect(() => {
        if(activeId) {
          const activeObra = obras.filter(obra => obra.id === activeId)[0];
          setValue('name', activeObra.name);
          setValue('client', activeObra.client);
          setValue('email', activeObra.email);
          setValue('date', activeObra.date);
          setValue('description', activeObra.description);
        }
      }, [activeId])

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    const registerObra = (data) => {
        if(activeId) {
            updateObra(data);
            toast.success('Obra actualizada correctamente', {
                position: "top-center",
                autoClose: 1000,});
        } else {
            addNewObra(data);
            toast.info('Obra registrada correctamente', {
                position: "top-center",
                autoClose: 1000,});
        }
        reset();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Obras</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Completá y Registrá tus {''}
                <span className="text-indigo-500 font-bold">Obras</span>
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
                        placeholder="Email del Cliente"
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
                    value={activeId ? 'Actualizar' : 'Registrar'}
                />
            </form>
        </div>
    )
}