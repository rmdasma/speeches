export class Speech {
    id: number;
    text: string;
    author: string;
    keywords: string;
    date: Date;
    visible: boolean;

    constructor(_id: number, _text: string, _author: string, _keywords: string, _date: Date)
    {
        this.id = _id;
        this.text = _text;
        this.author = _author;
        this.keywords = _keywords;
        this.date = _date;
        this.visible = true;
    }
}