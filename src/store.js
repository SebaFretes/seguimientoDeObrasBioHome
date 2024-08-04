import { create } from 'zustand';
import { v4 } from 'uuid';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const addingId = (obra) => {
    return { ...obra, id: v4() }
}

export const useObraStore = create(
    devtools(
        persist((set) => ({
            obras: [],
            activeId: '',
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
            },
            editObra: (id) => {
                set(() => ({
                    activeId: id
                }))
            },
            updateObra: (data) => {
                set(state => ({
                    obras: state.obras.map(obr => obr.id === state.activeId ? { id: state.activeId, ...data } : obr),
                    activeId: ''
                })
                )
            }
        }), {
            name: 'obra-storage',
            storage: createJSONStorage(() => localStorage)
        }
        )
    ));