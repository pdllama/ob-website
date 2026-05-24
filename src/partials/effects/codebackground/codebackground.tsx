import { useEffect, useRef, useState } from "react"
import useWindowStore from "@/app/store/window_store"
import CodeBackgroundStream from "./codebackgroundstream"

export default function CodeBackground({}) {

    const [divNode, setDivNode] = useState<HTMLDivElement|null>(null)

    const nav_height = useWindowStore((state) => state.nav_height)

    const div_ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const div = div_ref.current as HTMLDivElement
        setDivNode(div)
    }, [])

    return (
        <div 
            aria-hidden 
            className="absolute inset-0 text-accent text-start overflow-y-hidden whitespace-pre mask-b-from-80% mask-b-to-100% opacity-15 blur-xs flex justify-center"
            style={{
                top: `-${nav_height}px`,
                height: '120%'
            }}
            ref={div_ref}
        >
            <div
                aria-hidden
                className="flex flex-row relative justify-center w-full max-w-[1665px] overflow-x-hidden overflow-y-hidden"
            >
            {divNode &&
                <>
                    <CodeBackgroundStream typing_delay={15} font_size={14} container_height={divNode.clientHeight}/>
                    <CodeBackgroundStream typing_delay={25} font_size={14} left_position={555} container_height={divNode.clientHeight}/>
                    <CodeBackgroundStream typing_delay={15} font_size={14} left_position={1110} container_height={divNode.clientHeight}/>
            
                </>
            }
            </div>
        </div>
    )
}