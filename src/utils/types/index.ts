export interface ILink {
    url: string;
    title: string;
}

export interface IPost {
    title: string;
    description: string;
    id: string;
    date?: string | number;
}