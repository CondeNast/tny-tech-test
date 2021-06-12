export default class NewsModel {
  status: "ok" | string;
  totalResults: number;
  articles: ArticlesModel[];
  constructor(
    status?: "ok" | string,
    totalResults?: number,
    articles?: ArticlesModel[]
  ) {
    this.status = status ? status : "";
    this.totalResults = totalResults ? totalResults : 0;
    this.articles = articles ? articles : [];
  }
}

export class ArticlesSource {
  id: string | null;
  name: string;

  constructor() {
    this.id = null;
    this.name = "";
  }
}

export class ArticlesModel {
  id?: number;
  source: ArticlesSource;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;

  constructor() {
    this.source = new ArticlesSource();
    this.author = "";
    this.title = "";
    this.description = "";
    this.url = "";
    this.urlToImage = "";
    this.publishedAt = "";
    this.content = "";
  }
}
