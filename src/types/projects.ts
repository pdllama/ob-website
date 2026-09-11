import type { Titles } from "./titles"

type Project = {
    title: string,
    key: string,
    tags: Titles[],
    description: string,
    long_desc: string,
    img_alt: string,
    github: string,
    nav_link: string,
    start_date: Date|undefined,
    end_date: Date|undefined
}

export type {Project}