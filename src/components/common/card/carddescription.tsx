import Typography from "../typography/typography";
import type { CardDescriptionProps } from "./cardprops";


export default function CardDescription({children, color='main', classes=''}:Partial<CardDescriptionProps>) {

    return (
        <div className={`flex flex-col font-medium justify-center leading-[0] relative shrink-0 tracking-[-0.09px] w-full ${classes}`}>
            <Typography type='body3' color={color}>{children}</Typography>
        </div>
    )
}