import Button from "@/components/common/button/button";


function NavBar() {
  return (
    <nav className="content-stretch flex items-center justify-center relative size-full" data-name="NavBar">
        <section className="backdrop-blur-[35px] flex-[1_0_0] min-w-px relative rounded-[40px]" data-name="NavMain">
        <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col xs:flex-row items-center justify-center px-[39px] py-[16px] relative size-full gap-[20px] xs:gap-[0px]">
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]">Home</Button>
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]">About</Button>
            <Button data_name="Nav Button" borderless text_type='h2' x_padding="md:px-[32px] xs:px-[12px] px-[32px]">Contact</Button>
            </div>
        </div>
        </section>
    </nav>
  );
}

export default NavBar;