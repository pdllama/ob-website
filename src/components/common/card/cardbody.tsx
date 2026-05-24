
import type { CardBodyProps } from "./cardprops";



export default function CardBody({
    data_name='Card Body', bg_color='main', color='white', children, footer,
    inner_body_data_name='Card Information', classes=''
    }:Partial<CardBodyProps>
) {
 
    
    return (
        <div className={`bg-${bg_color} text-${color} relative shrink-0 w-full ${classes}`} data-name={data_name}>
            {/** This is an empty transparent div for hover effect purposes */}
            <div aria-hidden className='absolute opacity-0 bg-black size-full z-[-1px] body-hover'></div> 


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