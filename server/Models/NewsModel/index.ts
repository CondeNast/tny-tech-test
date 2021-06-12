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

interface ArticlesSource {
  id: string | null;
  name: string;
}

interface ArticlesModel {
  source: ArticlesSource;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
