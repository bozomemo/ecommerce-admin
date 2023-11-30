import { create } from "zustand";

interface useStoreModalInterface {
    isOpen:boolean;
    onOpen : () => void;
    onClosed : () => void;
};

export const useStoreModal = create<useStoreModalInterface>((set) => ({
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClosed : () => set({isOpen : false})
}));