import Typography from "../typography/typography";
import type { CardTitleProps } from "./cardprops";


export default function CardTitle({children, color='white'}:Partial<CardTitleProps>) {


    return (
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full">
            <Typography type='h5' color={color} classes='font-bold'>
                {children}
            </Typography>
        </div>
    )
}