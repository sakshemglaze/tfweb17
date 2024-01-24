interface ISeo {
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    fbTitle?: string;
    fbDescription?: string;
    fbImage?: string;
    fbUrl?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterSite?: string;
    twitterCard?: string;
    schemaDescription?: string;
}
export class Seo {
    title: any;
    metaTitle: any;
    metaDescription: any;
    metaKeywords: any;
    fbTitle: any;
    fbDescription: any;
    fbImage: any;
    fbUrl: any;
    twitterTitle: any;
    twitterDescription: any;
    twitterImage: any;
    twitterSite: any;
    twitterCard: any;
    schemaDescription: any;
    constructor(seo?: ISeo) {
        this.title = (seo && seo.title) || null;
        this.metaTitle = (seo && seo.metaTitle) || null;
        this.metaDescription = (seo && seo.metaDescription) || null;
        this.metaKeywords = (seo && seo.metaKeywords) || null;
        this.fbTitle = (seo && seo.fbTitle) || null;
        this.fbDescription = (seo && seo.fbDescription) || null;
        this.fbImage = (seo && seo.fbImage) || null;
        this.fbUrl = (seo && seo.fbUrl) || null;
        this.twitterTitle = (seo && seo.twitterTitle) || null;
        this.twitterDescription = (seo && seo.twitterDescription) || null;
        this.twitterImage = (seo && seo.twitterImage) || null;
        this.twitterSite = (seo && seo.twitterSite) || null;
        this.twitterCard = (seo && seo.twitterCard) || null;
        this.schemaDescription = (seo && seo.schemaDescription) || null;
    }
}
