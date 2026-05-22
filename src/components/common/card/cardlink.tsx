import Button from "../button/button";
import type { CardLinkProps } from "./cardprops";


export default function CardLink({data_name='Card Link', color='white', hover_color='accent', label='Click Me'}:CardLinkProps) {
    
    return (
        <Button
            size='xs' borderless color={color} hover_color={hover_color}
            data_name={data_name} 
        >
            {label}
        </Button>
        // <button className="cursor-pointer relative rounded-[5px] shrink-0" data-name={data_name}>
        //     <div className="flex flex-row items-center justify-center size-full">
        //     <div className="content-stretch flex items-center justify-center relative size-full">
        //         <p className="[word-break:break-word] font-['Orbitron:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-left text-white tracking-[-0.72px] whitespace-nowrap">
        //         <span className="leading-[1.03]">{`Read More `}</span>
        //         <span className="leading-[1.03]">→</span>
        //         </p>
        //     </div>
        //     </div>
        // </button> 
    )
}