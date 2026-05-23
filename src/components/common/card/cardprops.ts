import type { appcolor } from "@/types/colors"
import type { ChildrenProp, DataNameProp } from "@/types/props"
import type { ReactNode } from "react"

type CardProps = DataNameProp & ChildrenProp &{
    sizing: string
}

type CardImageProps = DataNameProp & {
    src: string
    alt: string
}

type CardBodyProps = DataNameProp & ChildrenProp & {
    footer: ReactNode
    bg_color: appcolor
    color: appcolor
    inner_body_data_name: string
}

type CardLinkProps = DataNameProp & {
    color: appcolor
    hover_color: appcolor
    label: string
}

type CardTitleProps = ChildrenProp & {
    color: appcolor
}

type CardDescriptionProps = ChildrenProp & {
    classes: string
    color: appcolor
}

export type {CardProps, CardImageProps, CardBodyProps, CardLinkProps, CardTitleProps, CardDescriptionProps}