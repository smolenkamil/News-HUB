import * as $ from 'jquery';
import {Article} from "./article";

export class NewsProvider{

  readonly MAIN_URL = "https://newsapi.org/v2/"
  readonly ENDPOINT = ["top-headlines", "everything", "sources"]
  defaultCountry = "pl"
  countryParam = "country="+this.defaultCountry //cant mix with sources
  sourceParam = "?sources="
  readonly CATEGORIES = ["business", "entertainment", "health", "science", "sports", "technology", "general"]
  categoryParam = "category=" //cant mix with sources
  keywordParam = "?q="
  readonly APIKEY = "&apiKey=575d0735025241fda1b32a047f19dcd3"

  titlex: string[] = [];
  descriptionx: string[] = [];
  urlToImgx: string[] = [];

  getArticle(cat):Article{
    let titlexx, descrxx,urlxx;
    let catParam = this.categoryParam+this.CATEGORIES[cat];
    $.ajaxSetup({'async': false});
    $.getJSON(this.MAIN_URL+this.ENDPOINT[0]+"?"+this.countryParam+"&"+this.categoryParam+this.CATEGORIES[cat]+this.APIKEY, (data) => {
      let ix = 0;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          this.titlex[ix] = data.articles[i].title
          this.descriptionx[ix] = data.articles[i].description
          this.urlToImgx[ix] = data.articles[i].urlToImage

          ix++;
        }
      }
      let rand = Math.floor(Math.random()*this.titlex.length)
      titlexx = this.titlex[rand];
      descrxx = this.descriptionx[rand];
      urlxx = this.urlToImgx[rand];
    });

    return new Article(titlexx,descrxx,urlxx);
  }

  eraseArticles():void{
    let lenght = this.titlex.length;
    this.titlex.splice(lenght-1,lenght);
  }


}

