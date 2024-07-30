import { create } from "zustand";

export const store = create(() => ({
    obras: [],
    addNewObra: (data) => {
        console.log(data);
    },
}));