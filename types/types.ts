export interface Feature1Type {
    title: string;
    description: string;
    iconUrl: string;
}

export interface AwesomeService1Type extends Feature1Type {}

export interface RecentProject1Type {
    imgUrl: string;
    title: string;
    category: string;
}

export interface ExpertTeam1Type {
    imgUrl: string;
    name: string;
    position: string;
}

export interface Testimonial1Type {
    comment: string;
    name: string;
    position: string;
    star: number;
}

export interface BlogArticle1Type {
    imgUrl: string;
    title: string;
    category: string;
}

export interface Social1Type {
    icon: string;
    url: string;
}

export interface LinkType {
    title: string;
    url: string;
}
