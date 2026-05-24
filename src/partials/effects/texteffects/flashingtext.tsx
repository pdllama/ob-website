import { useEffect, useState } from "react";
import type { appcolor } from "@/types/colors";


type FlashingUnderlineProps = {
    size: number|"inherit"; //px
    color: appcolor|"inherit",
    text: string,
    force_visible: boolean
}

export default function FlashingText({size="inherit", color='inherit', text="_", force_visible=false}:Partial<FlashingUnderlineProps>) {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(!visible)
        }, 500)
    }, [visible])


    return (
        <span 
            style={{
                fontSize: size === 'inherit' ? 'inherit' : `${size}px`, 
                color: color === 'inherit' ? 'inherit' : `var(--${color})`, 
                visibility: (visible || force_visible) ? 'visible' : 'hidden'
            }}
        >
            {text}
        </span>
    )

}