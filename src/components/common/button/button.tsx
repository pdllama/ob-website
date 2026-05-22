import Typography from "@components/common/typography/typography";
import type { ButtonProps } from "./buttonprops";
import "./button.css"

export default function Button({
  bg_color='main', color='white', hover_color='accent', size='md', text_type='button',
  x_padding='px-[32px]', y_padding='py-7px',
  data_name="Button", children, borderless=false,
  onClick=()=>{}}:Partial<ButtonProps>
) {

  const border_styles = borderless ? '' : `border-[2px] border-solid border-${color} border-holder rounded`

  return (
    <button 
      className={
        `bg-${bg_color} ${text_type === 'button' ? `button-${size}` : ''} 
        cursor-pointer relative w-fit h-fit
        text-${color} rounded border-hover-${hover_color}
        ${hover_color}-hover hover-color-transition hover-border-color-transition
        `
      } 
      data-name={data_name} 
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute ${border_styles} ${borderless ? '' : `${hover_color}-focus`} inset-0`} />
      <div className="flex flex-row items-center justify-center">
        <div className={`content-stretch flex items-center justify-center ${x_padding} ${y_padding} relative`}>
          <Typography type={text_type} classes={`${borderless ? `${hover_color}-focus` : ''} ${hover_color}-hover hover-color-transition`}>{children}</Typography>
        </div>
      </div>
    </button>
  );
}