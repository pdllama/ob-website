import type { appcolor } from "@/types/colors"
import { getTypeClass, type TypographyType } from "@apptypes/typography_types"
import type { ReactNode } from "react"

type TypographyProps = {
    type: TypographyType,
    color: appcolor|null,
    classes: string,
    children: ReactNode
}

export default function Typography({type='body', color=null, classes='', children}:Partial<TypographyProps>) {

    switch (type) {
        case 'h1': return <h1 className={`heading-1 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h1>;
        case 'h2': return <h2 className={`heading-2 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h2>;
        case 'h3': return <h3 className={`heading-3 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h3>;
        case 'h4': return <h4 className={`heading-4 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h4>;
        case 'h5': return <h5 className={`heading-5 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h5>;
        case 'h6': return <h6 className={`heading-6 ${color === null ? '' : `text-${color}`} ${classes}`} >{children}</h6>;
        default: return <p className={`${getTypeClass(type)} ${classes}`}>{children}</p>
    }
}