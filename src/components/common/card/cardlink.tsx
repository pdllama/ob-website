import Button from "../button/button";
import type { CardLinkProps } from "./cardprops";


export default function CardLink({data_name='Card Link', color='white', hover_color='accent', label='Click Me'}:Partial<CardLinkProps>) {
    
    return (
        <Button
            size='xs' borderless color={color} hover_color={hover_color}
            x_padding="8px"
            data_name={data_name} 
        >
            {label}
        </Button>
    )
}