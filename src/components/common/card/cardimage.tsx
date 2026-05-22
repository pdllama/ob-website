import type { CardImageProps } from "./cardprops";



export default function CardImage({data_name='Card Image', src, alt}:Partial<CardImageProps>) {

    return (
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name={data_name}>
            <div aria-hidden="true" className="h-[min-content] relative shrink-0 w-full" role="presentation" data-name={`${data_name} Inner Container`}>
                <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
            </div>
        </div>
    )
}