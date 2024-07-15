import { create } from 'zustand'


interface Props {
    colorScheme: string,
    setColor: (theme: string) => void,
    toggleColor: () => void,
}

export const useColoMenu = create<Props>((set) => ({
  colorScheme: "dark",
  setColor: (theme) => {
    set({colorScheme: theme})
  },
  toggleColor() {
    set((state) => {
        const newState = state.colorScheme == 'light'  ? 'dark' : 'light'
        return {colorScheme: newState}
    })
  },
}))