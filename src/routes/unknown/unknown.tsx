import Typography from "@/components/common/typography/typography"


type UnknownPageProps = {
    type: "general"|"project"
}

export default function UnknownPage({type="general"}:Partial<UnknownPageProps>) {

    return (
        <main
            className="
                content-stretch flex flex-col xl:gap-[60px] xs:gap-[50px] gap-[30px] 
                items-center
                xl:px-[64px] xs:px-[30px] px-[24px] 
                xs:pb-[20px] xs:pt-[80px] pt-[2rem]
                relative size-full
            " 
            data-name="Main"
        >
            <div className="flex flex-row min-w-full justify-center relative tracking-[-3.24px] w-[min-content]">
                <Typography
                    type='h1'
                    color='accent'
                    classes="w-full"
                >
                    Error 404
                </Typography>
                {/* <Typography type='h1' color='accent' classes="w-full">UI / UX Designer</Typography> */}
            </div>
            <div className="flex flex-col min-w-full w-[min-content] justify-center relative tracking-[-1px]">
                <Typography type='h2' color='white'>
                    {type === "general" ? "Page" : type === "project" && "Project"} Not Found
                </Typography>
            </div>
            <div className="flex flex-col min-w-full w-[min-content] justify-center relative">
                <Typography type='body2' color='white'>
                    {
                        type === "general" ? "This page has either not been implemented yet, or does not exist!" : 
                        type === "project" && "This project does not exist and/or was removed."
                    }
                </Typography>
            </div>
        </main>
    )
}