import { create } from "zustand"


type WindowStore = {
    nav_height: number //pixels
    set_nav_height: (_:number) => void
}

const useWindowStore = create<WindowStore>((set) => ({
    nav_height: 0,
    set_nav_height: (new_h: number) => set({nav_height: new_h})
}))

export default useWindowStore