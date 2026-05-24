import { useEffect, useState, useRef } from "react"
import useWindowStore from "@/app/store/window_store"
import { Stream } from "./codebackgroundtyping"

type CodeBackgroundStreamProps = {
    typing_delay:number,
    font_size:number,
    top_position:number,
    left_position:number,
    container_height:number,
    alignment:'start'|'center'|'end'
}

export default function CodeBackgroundStream({typing_delay=10, font_size=16, top_position=0, left_position=0, container_height=0, alignment='start'}:Partial<CodeBackgroundStreamProps>) {
    const [loop_toggle, set_loop_toggle] = useState(true)

    const [move_height, set_move_height] = useState(false)

    const stream_ref = useRef<Stream>(null)
    const p_ref = useRef<HTMLParagraphElement>(null)


    useEffect(() => {
        stream_ref.current = new Stream()
    }, [])

    useEffect(() => {
        const p = p_ref.current as HTMLParagraphElement;

        setTimeout(() => {
            const char = stream_ref.current?.write_stream();
            
            if (char === '<br>') {
                p.innerHTML += char
                if (move_height) {
                    p.style.top = `${parseInt(p.style.top)-14}px`
                }
            } else {
                p.append(char!)
            }
            if (!move_height && p.clientHeight > container_height) {
                set_move_height(true)
            }
            if (parseInt(p.style.top)*-1 > 10000) {
                p.innerHTML = ""
                p.style.top = `${top_position}px`
                stream_ref.current?.reset()
                set_move_height(false)
            }
            set_loop_toggle(!loop_toggle)
        }, typing_delay)

    }, [loop_toggle])

    return (
        <p className="absolute h-fit w-[555px]" ref={p_ref} style={{top: `${top_position}px`, left: `${left_position}px`, fontSize: `${font_size}px`, textAlign: alignment}}></p>
    )
}