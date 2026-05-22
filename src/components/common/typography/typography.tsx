import { getTypeClass, type TypographyType } from "@apptypes/typography_types"
import type { ReactNode } from "react"

type TypographyProps = {
    type: TypographyType,
    classes: string,
    children: ReactNode
}

export default function Typography({type='body', classes='', children}:Partial<TypographyProps>) {

    switch (type) {
        case 'h1': return <h1 className={`heading1 ${classes}`} >{children}</h1>;
        case 'h2': return <h2 className={`heading2 ${classes}`} >{children}</h2>;
        case 'h3': return <h3 className={`heading3 ${classes}`} >{children}</h3>;
        case 'h4': return <h4 className={`heading4 ${classes}`} >{children}</h4>;
        case 'h5': return <h5 className={`heading5 ${classes}`} >{children}</h5>;
        case 'h6': return <h6 className={`heading6 ${classes}`} >{children}</h6>;
        default: return <p className={`${getTypeClass(type)} ${classes}`}>{children}</p>
    }
}