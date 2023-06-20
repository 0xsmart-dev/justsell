export interface IArticle {
  id: number;
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
