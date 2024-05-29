/**
 * 代表一篇文章。
 */
export interface Article {
  /**
   * 文章的唯一識別碼。
   */
  id: number;

  /**
   * 文章的網址。
   */
  href: string;

  /**
   * 文章的標題。
   */
  title: string;

  /**
   * 文章的日期。
   */
  date: string;

  /**
   * 文章的作者。
   */
  author: string;

  /**
   * 文章的類別。
   */
  category: string;

  /**
   * 類別的網址。
   */
  "category-link": string;

  /**
   * 文章的摘要。
   */
  summary: string;
}
