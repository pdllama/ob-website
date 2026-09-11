import type { Titles } from "@/types/titles"
import { WrappedCard } from "../card"
import CardImage from "../cardimage"
import CardBody from "../cardbody"
import CardTitle from "../cardtitle"
import Tags from "../../tag/tags"
import CardDescription from "../carddescription"
import Typography from "../../typography/typography"
import { useNavigate } from "react-router"

type ProjectCardProps = {
    title: string,
    tags: Titles[],
    description: string,
    imgSrc: string,
    imgAlt: string,
    navLink: string
}

export default function ProjectCard({
    title, tags, description, imgSrc, imgAlt, navLink
}:Partial<ProjectCardProps>) {

    const navigate = useNavigate()


    return (
        <WrappedCard
            data_name={`${title} Card`}
            button_wrap={true}
            button_wrap_props={{
                hover_styles: [
                    {className:'img-hover', styles: {'scale': '120%', 'transition': 'scale 0.5s'}},
                    {className: 'body-hover', styles: {'opacity': '20%', 'transition': 'opacity 0.1s'}}
                ],
                onClick: !navLink ? undefined : () => navigate(navLink)
            }}
        >
            <CardImage src={`project-images/${imgSrc}`} alt={imgAlt} data_name={`${title} Image`} classes="img-hover"/>
            <CardBody
                data_name={`${title} Card Body`}
                inner_body_data_name={`${title} Card Information`}
                bg_color='tertiary'
                color='white'
                footer={<Typography color='white' type="body3">Read More →</Typography>}
            >
                
                <CardTitle color='white' length={title? title.length : 0}>{title}</CardTitle>
                <Tags title={title} tags={tags}/>
                <CardDescription color='main' classes='py-[1rem]'>
                    {description}
                </CardDescription>
            </CardBody>
        </WrappedCard>
    )
}