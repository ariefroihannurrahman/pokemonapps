import create from "zustand";

const useEmber = create((set) => ({
    isOpen: false,
    toggleOpen: () => set((state)=>({isOpen: !state.isOpen}))
}));

export default useEmber;
