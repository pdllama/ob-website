import Button from "@/components/common/button/button";


function NavBar() {
  return (
    <nav className="content-stretch flex items-center justify-center py-[24px] relative size-full" data-name="NavBar">
        <section className="backdrop-blur-[35px] flex-[1_0_0] min-w-px relative rounded-[40px]" data-name="NavMain">
        <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch cursor-pointer flex flex-col gap-[20px] items-center justify-center px-[39px] py-[16px] relative size-full">
            <Button data_name="Nav Button">Home</Button>
            <Button data_name="Nav Button">About</Button>
            <Button data_name="Nav Button">Contact</Button>
            </div>
        </div>
        </section>
    </nav>
  );
}

export default NavBar;