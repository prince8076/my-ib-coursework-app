import { create } from 'zustand';


interface AppState {
    files: File[];
    formData: { type: string; subject: string; title: string };
    addFile: (file: File) => void;
    setFormData: (data: { type: string; subject: string; title: string }) => void;
}

export const useStore = create<AppState>((set) => ({
    files: [],
    formData: { type: '', subject: '', title: '' },
    addFile: (file) => set((state) => ({ files: [...state.files, file] })),
    setFormData: (data) => set(() => ({ formData: data })),
}));
