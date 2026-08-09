export interface Article {
    id: number;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    tags: string[];
    published: boolean;
    publishedAt: string;
}