'use client';

import { create } from "zustand";

interface RentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({...state, isOpen: true })),
    onClose: () => set((state) => ({...state, isOpen: false })),
}))

export default useRentModal
