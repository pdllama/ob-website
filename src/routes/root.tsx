import Button from "@/components/common/button/button";
import Typography from "@/components/common/typography/typography";



export default function Root({}) {


    return (
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
            
            <div className="content-stretch flex flex-col items-center leading-[0] relative gap-[20px] text-center w-full" data-name="Heading">
                <div className="flex flex-col min-w-full justify-center relative tracking-[-3.24px] w-[min-content]">
                    <Typography type='h1' color='accent'>UI / UX Designer</Typography>
                </div>
                <div className="flex flex-col min-w-full w-[min-content] justify-center relative tracking-[-2.25px]">
                    <Typography type='h2' color='secondary'>Omar Bille</Typography>
                </div>
            </div>
            <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-center tracking-[-1.08px] xs:px-[32px] px-[0px]">
                <Typography type='body' classes='leading-[1.52]'>
                    I’m a full stack developer with a penchant for visual design. Among being interested in different computer-related disciplines, I am currently learning UI design at the University of Ottawa to effectively allow software users to accomplish their goals.
                </Typography>
            </div>
            <div className="content-stretch flex xs:flex-row flex-col gap-[30px] items-center justify-center relative shrink-0" data-name="Button Area">
                <Button
                    bg_color='tertiary' color='white' hover_color="accent" size='md' y_padding="py-[1rem]"
                    data_name='Projects Button' 
                >
                    Projects
                </Button>
                <Button
                    bg_color='secondary' color='main' hover_color="tertiary" size='md' y_padding="py-[1rem]"
                    data_name='Projects Button' 
                >
                    Resume
                </Button>
            </div>
        </main>

    )
}