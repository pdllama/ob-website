import type { ButtonLinkProps } from "./buttonprops";
import Typography from "../typography/typography";

export default function ButtonLink({
  bg_color=null, color='white', hover_color='accent', size='md',
  x_padding='px-[32px]', y_padding='py-[8px]',
  data_name="Button", children, borderless=false,
  classes="", no_relative=false, to
}:Partial<ButtonLinkProps>
) {
    const border_styles = borderless ? '' : `border-[2px] border-solid border-${color} border-holder rounded`

  return (
    <div
      className={
        `${bg_color ? `bg-${bg_color}` : ''} button-${size} 
        cursor-pointer ${no_relative ? '' : 'relative'} w-fit h-fit
        text-${color} rounded border-hover-${hover_color}
        ${hover_color}-hover hover-color-transition hover-border-color-transition
        ${classes}
        `
      } 
      data-name={data_name} 
      
    >
      <div aria-hidden="true" className={`absolute ${border_styles} ${borderless ? '' : `${hover_color}-focus`} inset-0`} />
      <div className="flex flex-row items-center justify-center">
        <div className={`content-stretch flex items-center justify-center relative`}>
            <Typography type={"body2"} classes={`${borderless ? `${hover_color}-focus` : ''} ${hover_color}-hover hover-color-transition ${y_padding}`}>
                <a className={`z-5 size-full ${x_padding} ${y_padding}`} href={to}>{children}</a>
            </Typography>
        </div>
      </div>
    </div>
  );
}