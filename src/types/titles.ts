

enum Titles {
    ui='ui_design',
    software='software_dev'
}

const title_to_tag:Record<Titles, string> = {
    ['ui_design']: 'UI Design',
    ['software_dev']: 'Software'
}

const title_to_role:Record<Titles, string> = {
    ['ui_design']: 'UI / UX Designer',
    ['software_dev']: 'Software Developer'
}


export {Titles, title_to_role, title_to_tag}