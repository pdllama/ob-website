import type { ReactNode } from "react"

export type ButtonProps = {
    bg_class: string
    accent_c_class:string
    data_name: string
    onClick: () => void
    children: ReactNode
}