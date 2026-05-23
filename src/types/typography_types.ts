
type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body2' | 'body3' | 'button'

const isHeading = (t:TypographyType) => {
    return t === 'h1' || t === 'h2' || t === 'h3' || t === 'h4' || t === 'h5' || t === 'h6';
}

const getTypeClass = (t:TypographyType) => {
    // non-headings are handled already in a switch, so we just need non-headings 
    switch (t) {
        case 'body': return 'body';
        case 'body2': return 'body2';
        case 'body3': return 'body3';
        case 'button': return 'button-text';
        default: return 'body';
    }
}


export type {TypographyType}

export {isHeading, getTypeClass}
