import { generateStyleSheet, type ButtonWrapperProps } from "./buttonprops";

export default function ButtonWrapper({
    x_padding='', y_padding='',
    data_name="Button", children, border_color='white', borderless=true,
    classes="", no_relative=false, hover_styles=[],
    onClick=()=>{}
}:Partial<ButtonWrapperProps>) {

    const border_styles = borderless ? '' : `border-[2px] border-solid border-${border_color} border-holder rounded`

    return (
        <>
            <style>
                {generateStyleSheet(hover_styles)}
            </style>
            <button 
                className={
                `cursor-pointer ${no_relative ? '' : 'relative'} size-full
                rounded border-hover-${border_color}
                hover-color-transition hover-border-color-transition wrapped_button
                ${classes}
                `
                } 
                data-name={data_name} 
                onClick={onClick}
            >
                <div aria-hidden="true" className={`absolute ${border_styles} ${borderless ? '' : `${border_color}-focus`} inset-0`} />
                <div className="flex flex-row items-center justify-center size-full">
                    <div className={`content-stretch flex items-center justify-center size-full ${x_padding} ${y_padding} relative`}>
                        {children}
                    </div>
                </div>
            </button>
        </>
    )
}