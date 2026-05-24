import type { CardImageProps } from "./cardprops";



export default function CardImage({data_name='Card Image', src, alt, classes=""}:Partial<CardImageProps>) {

    return (
        <div className={`content-stretch flex flex-col items-center justify-center relative shrink-0 w-full ${classes}`} data-name={data_name}>
            <div aria-hidden="true" className="relative shrink-0 w-full h-[240px]" role="presentation" data-name={`${data_name} Inner Container`}>
                <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={`/${src}`} />
            </div>
        </div>
    )
}