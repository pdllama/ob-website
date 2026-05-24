import type { appcolor } from "@/types/colors"
import type { TypographyType } from "@/types/typography_types"
import type { ReactNode } from "react"

type CommonButtonProps = {
    data_name: string
    onClick: () => void
    children: ReactNode
    borderless: boolean
    x_padding: string
    y_padding: string
    classes:string
    no_relative:boolean
}


export type TextButtonProps = CommonButtonProps & {
    bg_color: string | null
    color: appcolor
    hover_color: appcolor
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    text_type: TypographyType 
}

type ButtonWrapperHoverStyles = {
    className: string,
    styles: Record<string, string|number>
}


export type ButtonWrapperProps = CommonButtonProps & {
    hover_styles: ButtonWrapperHoverStyles[]
    border_color: appcolor
}

export function generateStyleSheet(styles:ButtonWrapperHoverStyles[]) {
    let style_string = '';
    for (let s of styles) {
        style_string += `.wrapped_button:hover .${s.className} {`
        const applied_styles = Object.keys(s.styles);
        for (let as of applied_styles) {
            style_string+= `${as}: ${s.styles[as]};`
        }
        style_string += "} "
    }
    return style_string
}