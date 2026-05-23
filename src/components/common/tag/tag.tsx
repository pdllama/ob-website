import "./tag.css"
import { title_to_tag, type Titles } from "@/types/titles";
import Typography from "../typography/typography";


type TagProps = {
    tag: Titles
}

export default function Tag({tag}:Partial<TagProps>) {

    const color_style = `${tag}_tag_color`
    const tag_label = title_to_tag[tag as Titles] 

    return (
        <div className={`${color_style} h-[30px] relative rounded-[10px] shrink-0 w-[fit-content] p-[0.5rem]`} data-name={`${tag_label} Tag`}>
            <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
                    <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16px] tracking-[-0.72px] w-full">
                        <Typography type='body3'>{tag_label}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}