import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Props = {
    isMuted: boolean,
    isPlay: boolean
    onMuted: () => void
    onPause: () => void
    setPause: (e: boolean) => void
}

export const useVideo = create<Props>()((set, get) => ({
    isMuted: true,
    isPlay: true,
    onMuted: () => set({ isMuted: !get().isMuted }),
    onPause: () => set({ isPlay: !get().isPlay }),
    setPause: (e) => set({ isPlay: e }),
}))