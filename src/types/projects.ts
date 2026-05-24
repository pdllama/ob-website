import type { Titles } from "./titles"

type Project = {
    title: string,
    tags: Titles[],
    description: string,
    img_name: string,
    img_alt: string,
    nav_link: string
}

export type {Project}