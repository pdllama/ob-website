import codeContentJson from "./codebackground.json"

type Line = {
    line: string,
    space: number
}

const codeContent = codeContentJson.map((cd:string|Line) => {
    if (typeof cd === "string") {
        return {line: cd, space: 1};
    }
    return cd;
})

export class Stream {
    private line_num:number
    private curr_line:Line
    private line_idx:number

    private space_num:number

    private char_idx:number
    private char_stream:string

    private start_line:boolean // indicates if a line hasn't reached a character yet. used to write tab characters correctly

    constructor() {

        this.line_num = 0;
        this.line_idx = 0
        this.curr_line = codeContent[this.line_idx]

        this.space_num = 0;

        this.char_idx = 0;
        this.char_stream = ""

        this.start_line = true;
    }

    write_stream() {
        // if (Math.random() < 0.4) {

            if (this.char_idx < this.curr_line.line.length) {
                return this.write_next_char()
            } else {

                this.line_num++;
                this.space_num++;

                if (this.space_num === this.curr_line.space) {
                    this.go_next_line()
                }

                return "<br>"
            }
        // }
    }

    private write_next_char() {
        const next_char = this.curr_line.line[this.char_idx]
        if (next_char === " " && this.start_line && this.curr_line.line[this.char_idx+1] !== '*') { // indicates a tab character. filters out comment lines with " * <comment>"
            this.char_stream += "    "
            this.char_idx += 4
            this.start_line = false;
            return "    ";
        } else {
            this.char_stream += next_char
            this.char_idx ++
            this.start_line = false;
            return next_char;
        }
    }

    private go_next_line() {
        this.start_line = true;
        this.space_num = 0;
        this.line_idx++;
        if (this.line_idx >= codeContent.length) {this.line_idx = 0}
        this.curr_line = codeContent[this.line_idx]
        this.char_stream = ""
        this.char_idx = 0
    }

    reset() {
        this.start_line = true;
        this.space_num = 0;
        this.line_idx = 0;
        this.curr_line = codeContent[this.line_idx]
        this.char_stream = ""
        this.char_idx = 0
    }

}
