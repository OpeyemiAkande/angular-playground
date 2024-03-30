export interface AchieventModel {
    magnitude: string;
    metric: string
}

export interface PartnerModel {
    imageUrl: string;
    desc: string;
}

export interface stepModel {
    headingText: string;
    paragraphText: string;
}

export interface BlogCardModel {
    imageUrl: string;
    paragraphText: string;
    headingText: string;
}

export interface FeatureCardModel {
    imageUrl: string;
    paragraphText: string;
    headingText: string;
}

export interface SectionBlockModel {
    sectionTitleText: string,
    sectionTitleType: string,
    headingType: string,
    headingText: string,
    paragraphType: string,
    paragraphText: string
    higlightedText?: string;
}