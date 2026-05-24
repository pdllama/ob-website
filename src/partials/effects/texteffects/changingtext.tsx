import Typography from "@/components/common/typography/typography"
import type { appcolor } from "@/types/colors"
import type { TypographyType } from "@/types/typography_types"
import { useEffect, useRef, useState } from "react"
import FlashingText from "./flashingtext"


type ChangingTextProps = {
    texts: string[],
    text_type: TypographyType,
    color: appcolor,
    classes:string,
    stay_duration:number //seconds that a text stays as it is
    empty_duration:number //seconds that the text stays empty for a little bit
}

function writing_loop(text:string, set_text:(_:string) => void, set_typing:(_:boolean) => void, next_text:string, empty_duration: number, set_loop_toggle: (_:boolean) => void, loop_toggle:boolean) {
    set_typing(true);
    let sliced_text = text.slice(0, text.length-1);
    set_text(sliced_text)

    setTimeout(() => {
        
        for (let i = text.length-2; i >= 0; i--) {
           
            setTimeout(() => {
                sliced_text = text.slice(0, i)
                set_text(sliced_text)
                if (i === 0) {
                    set_typing(false);
                    setTimeout(() => {
                        set_typing(true);
                        let curr_text = next_text[0];
                        set_text(next_text[0])
                        for (let i = 1; i < next_text.length; i++) {
                            const c = next_text[i]
                            setTimeout(() => {
                                set_text(curr_text+c);
                                curr_text += c;
                                if (i === next_text.length-1) {
                                    set_typing(false);
                                    set_loop_toggle(!loop_toggle);
                                }
                            }, i*70)
                        }
                    }, empty_duration*1000)
                }
            }, ((text.length-1)*20)-i*20)
            
        }
        
    }, 500)

}

export default function ChangingText({texts=['placeholder'], text_type='body', color='accent', classes='', stay_duration=5, empty_duration=1}:Partial<ChangingTextProps>) {

    const [text, set_text] = useState(texts[0])
    const [typing, set_typing] = useState(false)
    const [loop_toggle, set_loop_toggle] = useState(false)
    const [screen_width, set_screen_width] = useState(window.innerWidth)


    const text_ref = useRef<HTMLHeadingElement|HTMLParagraphElement>(null)
    const span_ref = useRef<HTMLSpanElement>(null)
    const height_ref = useRef<number>(null)
    const screen_width_ref = useRef<number>(null)

    const idx_ref = useRef(1);


    useEffect(() => {

        window.addEventListener('resize', () => {
            set_screen_width(window.innerWidth)
            height_ref.current = null
        })

        height_ref.current = text_ref.current!.clientHeight
        screen_width_ref.current = window.innerWidth
    }, [])

    useEffect(() => {

        const next_text = texts[idx_ref.current]
        idx_ref.current = idx_ref.current === texts.length-1 ? 0 : idx_ref.current+1

        setTimeout(() => {
            writing_loop(text, set_text, set_typing, next_text, empty_duration, set_loop_toggle, loop_toggle)
        }, stay_duration*1000)

    }, [loop_toggle])

    useEffect(() => {
        const max_height = span_ref.current!.getBoundingClientRect().height

        if (!height_ref.current || height_ref.current < max_height) {
            height_ref.current = max_height
        }
    }, [screen_width, text, loop_toggle])

    // const height_class = height_ref.current ? 

    return (
        <Typography type={text_type} color={color} classes={classes} ref={text_ref} raw_style={height_ref.current ? {height: `${height_ref.current}px`} : {}}>
            <span ref={span_ref}>{text}</span><FlashingText text="|" force_visible={typing}/>
        </Typography>
    )
}