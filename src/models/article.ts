export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
};

export type ArticlePost = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type ArticleUpdate = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type ArticlesDataState = {
  articles: Article[];
};

export type AnArticleDataState = {
  article: Article;
};
