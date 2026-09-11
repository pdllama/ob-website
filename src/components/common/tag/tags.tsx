import type { Titles } from "@/types/titles"
import TagArea from "./tagarea"
import Tag from "./tag"

type TagsProps = {
    title: string|undefined,
    tags: Array<Titles>|undefined
}


export default function Tags({title, tags}:TagsProps) {


    return tags?.length !== 0 && 
        <TagArea data_name={`${!title ? "" : `${title} `}Tags`}>
            {tags?.map((tag:Titles) => {
                return (
                    <Tag key={`${tag}-tag`} tag={tag}/>
                )
            })}
            
        </TagArea>
}