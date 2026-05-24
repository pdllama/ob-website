import useWindowStore from "@/app/store/window_store";
import Button from "@/components/common/button/button";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";


function NavBar() {
  const navigate = useNavigate()

  const set_nav_height = useWindowStore((state) => state.set_nav_height)

  const nav_ref = useRef<HTMLDivElement>(null)

  useEffect(() => {

    set_nav_height(nav_ref.current?.clientHeight as number)

    window.addEventListener('resize', () => {
      set_nav_height(nav_ref.current?.clientHeight as number)
    })

  }, [])

  return (
    <nav className="content-stretch flex items-center justify-center relative size-full z-[1]" data-name="NavBar" ref={nav_ref}>
        <section className="flex-[1_0_0] min-w-px relative rounded-[40px]" data-name="NavMain">
        <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col xs:flex-row items-center justify-center px-[39px] py-[16px] relative size-full gap-[20px] xs:gap-[0px]">
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]" onClick={() => navigate('/')}>Home</Button>
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]" onClick={() => navigate('/about')}>About</Button>
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]" onClick={() => navigate('/contact')}>Contact</Button>
            </div>
        </div>
        </section>
    </nav>
  );
}

export default NavBar;