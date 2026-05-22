import Typography from "@components/common/typography/typography";
import type { ButtonProps } from "./buttonprops";


export default function Button({bg_class='bg-main', accent_c_class='border-white', data_name="Button", children, onClick=()=>{}}:Partial<ButtonProps>) {

    return (
    <button className={`${bg_class} cursor-pointer relative size-full`} data-name={data_name} onClick={onClick}>
      <div aria-hidden="true" className={`absolute border border-solid ${accent_c_class} inset-0 pointer-events-none`} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[7px] pt-[4px] px-[10px] relative size-full">
          <Typography type='button'>{children}</Typography>
        </div>
      </div>
    </button>
  );
}