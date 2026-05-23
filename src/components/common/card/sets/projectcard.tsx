import type { Titles } from "@/types/titles"
import { WrappedCard } from "../card"
import CardImage from "../cardimage"
import CardBody from "../cardbody"
import CardLink from "../cardlink"
import CardTitle from "../cardtitle"
import TagArea from "../../tag/tagarea"
import Tag from "../../tag/tag"
import CardDescription from "../carddescription"

type ProjectCardProps = {
    title: string,
    tags: Titles[],
    description: string,
    imgSrc: string,
    imgAlt: string
}

export default function ProjectCard({
    title, tags, description, imgSrc, imgAlt
}:Partial<ProjectCardProps>) {


    return (
        <WrappedCard
            data_name={`${title} Card`}
        >
            <CardImage src={imgSrc} alt={imgAlt} data_name={`${title} Image`}/>
            <CardBody
                data_name={`${title} Card Body`}
                inner_body_data_name={`${title} Card Information`}
                bg_color='tertiary'
                color='white'
                footer={<CardLink data_name={`${title} Card Link`} color='white' hover_color="accent" label='Read More →'/>}
            >
                <CardTitle color='white'>{title}</CardTitle>
                {tags?.length !== 0 && 
                <TagArea data_name={`${title} Tags`}>
                    {tags?.map((tag:Titles) => {
                        return (
                            <Tag key={`${tag}-tag`} tag={tag}/>
                        )
                    })}
                    
                </TagArea>
                }
                <CardDescription color='main' classes='py-[1rem]'>
                    {description}
                </CardDescription>
            </CardBody>
        </WrappedCard>
    )
}