'use client';

import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({...state, isOpen: true })),
    onClose: () => set((state) => ({...state, isOpen: false })),
}))

export default useLoginModal
