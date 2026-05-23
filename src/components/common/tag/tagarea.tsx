import type { ChildrenProp, DataNameProp } from "@/types/props"


type TagAreaProps = DataNameProp & ChildrenProp & {

}

export default function TagArea({children, data_name='Tag Area'}:Partial<TagAreaProps>) {


    return (
        <div className="content-stretch flex gap-[8px] h-[30px] items-start relative shrink-0 w-full" data-name={data_name}>
            {children}
        </div>
    )
}