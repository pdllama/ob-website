
import type { CardBodyProps } from "./cardprops";



export default function CardBody({
    data_name='Card Body', bg_color='main', color='white', children, footer,
    inner_body_data_name='Card Information'
    }:Partial<CardBodyProps>
) {
 
    
    return (
        <div className={`bg-${bg_color} text-${color} relative shrink-0 w-full`} data-name={data_name}>
            <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full text-start" data-name={inner_body_data_name}>
                        {children}
                    </div>
                    {footer && footer}
                </div>
            </div>
        </div>
    )
}