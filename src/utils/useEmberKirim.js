import create from "zustand";

const useEmberKirim = create((set) => ({
    isOpen: false,
    toggleOpen: () => set(()=>({isOpen: true}))
}));

export default useEmberKirim;
