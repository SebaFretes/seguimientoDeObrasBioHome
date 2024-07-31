import { create } from 'zustand';
import { v4 } from 'uuid';

const addingId = (obra) => {
    return {...obra, id: v4() }
}

export const useObraStore = create((set) => ({
    obras: [],
    addNewObra: (data) => {
        const newObra = addingId(data);
        set(state => ({
            obras: [...state.obras, newObra]
        }))
    },
    deleteObra: (id) => {
        set(state => ({
            obras: state.obras.filter(obra => obra.id !== id)
        }))
    }
}));