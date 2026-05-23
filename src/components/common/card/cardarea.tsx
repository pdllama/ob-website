import type { ChildrenProp, DataNameProp } from "@/types/props";
import "./card.css"

type CardAreaProps = ChildrenProp & DataNameProp & {

}

// xl:grid-cols-[repeat(3,fit-content(100%))] xl:grid-rows-[repeat(2,fit-content(100%))]
// xs:grid-cols-[repeat(2,minmax(0,1fr))] xs:grid-rows-[repeat(2,fit-content(100%))] 
// grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(4,fit-content(100%))]

export default function CardArea({children, data_name="Card Area"}:Partial<CardAreaProps>) {
    return (
        <ul 
            className="
                w-full
                gap-x-[13px] gap-y-[15px]
                card-area
                h-[fit-content] shrink-0
            " 
            data-name={data_name}
        >
            {children}
        </ul>
    )
}