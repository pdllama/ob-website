import ButtonWrapper from "../button/buttonwrapper";
import type { CardProps } from "./cardprops";




export default function Card({data_name='Card', sizing='size-full', children, button_wrap=false, button_wrap_props={}}:Partial<CardProps>) {

    if (button_wrap) {
        return (
            <article className={`relative rounded-[16px] ${sizing}`} data-name={data_name}>
                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <ButtonWrapper
                        {...button_wrap_props}
                    >
                        {children}
                    </ButtonWrapper>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
            </article>
        )
    }

    return (
        <article className={`relative rounded-[16px] ${sizing}`} data-name={data_name}>
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                {children}
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </article>
    )
}

export function WrappedCard({data_name, sizing, children, button_wrap=false, button_wrap_props={}}:Partial<CardProps>) {

    if (button_wrap) {
        return (
            <li className="relative self-stretch shrink-0 w-full">
                <ButtonWrapper
                    {...button_wrap_props}
                >
                    <Card data_name={data_name} sizing={sizing}>{children}</Card>
                </ButtonWrapper>
            </li>
        )
    }

    return (
        <li className="relative self-stretch shrink-0 w-full">
            <Card data_name={data_name} sizing={sizing}>{children}</Card>
        </li>
    )
}