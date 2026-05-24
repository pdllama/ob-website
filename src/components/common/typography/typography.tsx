import type { appcolor } from "@/types/colors"
import { getTypeClass, type TypographyType } from "@apptypes/typography_types"
import type { ReactNode } from "react"

type TypographyProps = {
    type: TypographyType,
    color: appcolor|null,
    classes: string,
    raw_style: object,
    children: ReactNode,
    ref:React.RefObject<HTMLHeadingElement|HTMLParagraphElement|null>
}

export default function Typography({type='body', color=null, classes='', raw_style={}, children, ref}:Partial<TypographyProps>) {

    switch (type) {
        case 'h1': return <h1 ref={ref} className={`heading-1 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h1>;
        case 'h2': return <h2 ref={ref} className={`heading-2 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h2>;
        case 'h3': return <h3 ref={ref} className={`heading-3 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h3>;
        case 'h4': return <h4 ref={ref} className={`heading-4 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h4>;
        case 'h5': return <h5 ref={ref} className={`heading-5 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h5>;
        case 'h6': return <h6 ref={ref} className={`heading-6 ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style} >{children}</h6>;
        default: return <p ref={ref} className={`${getTypeClass(type)} ${color === null ? '' : `text-${color}`} ${classes}`} style={raw_style}>{children}</p>
    }
}