import { create } from 'zustand'

interface State {
  username: string
}

interface Actions {
  updateUsername: (user: State['username']) => void
}

export const useUserStore = create<State & Actions>((set) => ({
  username: '',
  updateUsername: (username) => set(() => ({ username: username }))
}))
