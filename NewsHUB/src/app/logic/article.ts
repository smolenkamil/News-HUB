export class Article{
  private _title: string;
  private _description: string;
  private _urlToImg: string;
  constructor(title,description, url){
    this._title=title;
    this._description=description;
    this._urlToImg=url;
  }
  get title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get urlToImg(): string {
    return this._urlToImg;
  }
}