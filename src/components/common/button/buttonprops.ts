import type { appcolor } from "@/types/colors"
import type { TypographyType } from "@/types/typography_types"
import type { ReactNode } from "react"

export type ButtonProps = {
    bg_color: string | null
    color: appcolor
    hover_color: appcolor
    data_name: string
    onClick: () => void
    children: ReactNode
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    text_type: TypographyType
    borderless: boolean
    x_padding: string
    y_padding: string
}