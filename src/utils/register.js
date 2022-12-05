import create from "zustand";

const register = create((set) => ({
    name: "",
    username: "",
    email: "",
    password: "",
    setName: set((state)=>({name: })),
    setUsername: ,
    setEmail: ,
    setPassword: ,
    toggleOpen: () => set((state)=>({isOpen: !state.isOpen})),
}));

export default register;
