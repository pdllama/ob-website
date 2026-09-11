import { useLocation, useParams, useNavigate } from "react-router";
import projects from "@data/projects.json"
import UnknownPage from "../unknown/unknown";
import Typography from "@/components/common/typography/typography";
import Tags from "@/components/common/tag/tags";
import type { Titles } from "@/types/titles";
import Button from "@/components/common/button/button";
import ButtonLink from "@/components/common/button/buttonlink";

function getProject(project_key:string|undefined) {
    return projects.filter((p) => p.key === project_key)[0]
}

export default function ShowProject({}) {
    const navigate = useNavigate()

    const {project_key} = useParams();
    const project = getProject(project_key)

    if (project === undefined) {
        return <UnknownPage type="project"/>
    }

    return (
        <>
        <main
            className="
                w-full h-fit flex md:flex-row flex-col p-2 gap-8
                justify-center items-center
            "
            tabIndex={-1}
            data-name="Main"
        >
            <div className="min-w-[300px] max-w-[400px] max-h-[400px]">
                <img src={`/project-images/${project.key}-circular.png`} width="100%" height="100%" alt={project.img_alt}/>
            </div>
            
            <section
                className="flex flex-col gap-4"
                data-name="Basic Information"
            >
                <Typography type="h1" color="tertiary" classes="w-full text-start">{project.title}</Typography>
                <Tags title={project.title} tags={project.tags as Titles[]}/>
                <Typography type="body2" color="white" classes="w-full text-start indent-[30px]">{project.long_desc}</Typography>
                <div className="w-full content-stretch flex flex-row xs:gap-[30px] gap-[10px] items-center md:justify-start justify-center relative shrink-0" data-name="Button Area">
                    <ButtonLink 
                        bg_color='tertiary' color='white' hover_color="accent" size='md' y_padding="py-[1rem]"
                        data_name='Projects Button'
                        to={project.github}
                    >
                        Github
                    </ButtonLink>
                    <ButtonLink 
                        color='white' hover_color="accent" size='md' y_padding="py-[1rem]"
                        data_name='Projects Button'
                        to={project.nav_link}
                    >
                        Live Preview
                    </ButtonLink>
                </div>
            </section>
            
        </main>
        <div aria-hidden className="h-[5px] w-[10px] bg-tertiary">

        </div>
        <section
            data-name="Additional Information"
            className="w-screen flex justify-center items-center py-1 px-2"
        >

        </section>
        </>
    )
}