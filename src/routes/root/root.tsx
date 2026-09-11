import Button from "@/components/common/button/button";
import CardArea from "@/components/common/card/cardarea";
import ProjectCard from "@/components/common/card/sets/projectcard";
import Typography from "@/components/common/typography/typography";
import type { Project } from "@/types/projects";
import projects from "@data/projects.json"
import CodeBackground from "@/partials/effects/codebackground/codebackground";
import { title_to_role } from "@/types/titles";
import ChangingText from "@/partials/effects/texteffects/changingtext";
import "./root.css"
import { useNavigate } from "react-router";

function ProjectsSection({}) {

    return (
        <section 
            className="
                content-stretch flex flex-col 
                
                items-center justify-center py-[15px] relative
                xl:px-[64px] xs:px-[30px] px-[24px] 
                xs:pb-[20px] xs:pt-[80px] pt-[2rem]
            " 
            data-name="Projects"
        >
            <div className="content-stretch flex flex-col items-start justify-center gap-[16px] max-w-[1400px] size-full relative">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 tracking-[-2.25px]">
                    <Typography type='h2' color='tertiary'>Projects</Typography>
                </div>
                <CardArea data_name="Project Cards">
                    {projects.map((p:any) => {
                        const p_details = p as Project
                        return (
                            <ProjectCard 
                                key={`${p_details.title}-card`}
                                title={p_details.title}
                                tags={p_details.tags}
                                description={p_details.description}
                                imgSrc={`${p_details.key}.png`}
                                imgAlt={p_details.img_alt}
                                navLink={`/projects/${p_details.key}`}
                            />
                        )
                    })}
                </CardArea>
            </div>
        </section>
    )
}


export default function Root({}) {

    const navigate = useNavigate()

    return (
        <>
        <main 
        className="
            content-stretch flex flex-col xl:gap-[60px] xs:gap-[50px] gap-[30px] 
            items-center
            xl:px-[64px] xs:px-[30px] px-[24px] 
            xs:pb-[20px] xs:pt-[80px] pt-[2rem]
            relative size-full
        " 
        tabIndex={-1} 
        data-name="Main"
        >
            {/* <div className="content-stretch flex flex-col items-center absolute size-full" aria-hidden> */}
            <CodeBackground/>
            {/* </div> */}
            <div className="content-stretch flex flex-col items-center leading-[0] relative gap-[20px] text-center w-full smooth-in" data-name="Heading">
                <div className="flex flex-row min-w-full justify-center relative tracking-[-3.24px] w-[min-content]">
                    <ChangingText 
                        texts={Object.values(title_to_role)}
                        text_type='h1'
                        color='accent'
                        classes="w-full"
                    />
                    {/* <Typography type='h1' color='accent' classes="w-full">UI / UX Designer</Typography> */}
                </div>
                <div className="flex flex-col min-w-full w-[min-content] justify-center relative tracking-[-2.25px]">
                    <Typography type='h2' color='secondary'>Omar Bille</Typography>
                </div>
            </div>
            <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-center tracking-[-1.08px] xs:px-[32px] px-[0px] max-w-[1000px] smooth-in-late">
                <Typography type='body' classes='leading-[1.52]'>
                    I’m a full stack developer with a penchant for visual design. Among being interested in different computer-related disciplines, I am currently learning UI design at the University of Ottawa to effectively allow software users to accomplish their goals.
                </Typography>
            </div>
            <div className="content-stretch flex xs:flex-row flex-col gap-[30px] items-center justify-center relative shrink-0 smooth-in-late" data-name="Button Area">
                <Button
                    bg_color='tertiary' color='white' hover_color="accent" size='md' y_padding="py-[1rem]"
                    // classes="absolute right-[30px]" no_relative
                    data_name='Projects Button'
                    onClick={() => navigate('/projects')} 
                >
                    Projects
                </Button>
                <Button
                    bg_color='secondary' color='main' hover_color="tertiary" size='md' y_padding="py-[1rem]"
                    // classes="absolute left-[30px]" no_relative
                    data_name='Resume Button' 
                    onClick={() => navigate('/resume')} 
                >
                    Resume
                </Button>
            </div>
        </main>
        <ProjectsSection/>

        </>

    )
}