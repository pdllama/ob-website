import Typography from "@/components/common/typography/typography"
import type { technology } from "@/types/technology"

type InfoBlurbProps = {
    title:string,
    dataname:string,
    content:string|Array<string>|Array<technology>
}

export default function InfoBlurb({title, content, dataname}:InfoBlurbProps) {


    let display = typeof content === "string" ? content : ""
    if (typeof content !== "string") {
        for (let i = 0; i < content.length; i++) {
            const piece = content[i]
            if (i !== 0) {display += ", "}
            display += piece
        }
    }

    return (
        <div 
            data-name={dataname}
            className="px-3 py-1 rounded-sm bg-black flex flex-col items-center gap-2"
        >
            <div className="text-accent w-full flex justify-center"><Typography type="h6">{title}</Typography></div>
            <div className="size-full flex justify-center items-center">
                {display}
            </div>
        </div>
    )
}