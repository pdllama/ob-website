import Typography from "../typography/typography";
import type { CardTitleProps } from "./cardprops";


export default function CardTitle({children, color='white', length=0}:Partial<CardTitleProps>) {

    const textSize = length > 15 ? "text-[20px]" : "text-[24px]"

    return (
        <div className={`flex flex-col justify-center leading-[0] min-h-[28.8px] relative shrink-0 ${textSize} text-white tracking-[-0.48px] w-full`}>
            <Typography type='h5' color={color} classes='font-bold'>
                {children}
            </Typography>
        </div>
    )
}