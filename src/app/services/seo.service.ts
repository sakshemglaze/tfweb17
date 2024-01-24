import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Seo } from '../models/seo';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { TRADERSFIND } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  defaultTitle = "TradersFind - UAE Suppliers Manufactures Exporters Directory - UAE B2B Marketplace";
  defaultMetaTitle =
    "TradersFind UAE's largest B2B Portal - List of Companies in UAE.";
  defaultMetaDescription =
    "TradersFind is UAE's Largest Online B2B Portal connecting buyers with suppliers. List of companies in UAE with contact details. Promote your business by advertising with us!";
  defaultMetaKeywords =
    "tradersfind, b2b portal, list of companies in uae, b2b marketplace, business directory, manufacturers in uae, suppliers in uae, buyers in uae, yellowpages uae, importers in uae, uae companies directory, b2b website, business marketplace, local business listings, business directory in uae";
  defaultImage = "https://www.tradersfind.com/assets/images/YP-logo@2x.png";
  defaultUrl = "https://www.tradersfind.com";
  private renderer2: Renderer2;
  constructor(
    private titleService: Title,
    private metaService: Meta,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  createAndSetSeoAttributes(object: any) {
    let seo = new Seo({
      title:
        object.metaTitle && object.metaTitle != "" ? object.metaTitle : null,
      metaTitle:
        object.metaTitle && object.metaTitle != "" ? object.metaTitle : null,
      metaDescription:
        object.metaDescription && object.metaDescription != ""
          ? object.metaDescription
          : null,
      metaKeywords:
        object.metaKeywords && object.metaKeywords != ""
          ? object.metaKeywords
          : null,
      fbTitle: object.fbTitle && object.fbTitle != "" ? object.fbTitle : null,
      fbDescription:
        object.fbDescription && object.fbDescription != ""
          ? object.fbDescription
          : null,
      fbImage: object.fbImage
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        object.fbImage.id
        : '',
      fbUrl: object.fbUrl && object.fbUrl != "" ? object.fbUrl : null,
      twitterTitle:
        object.twitterTitle && object.twitterTitle != ""
          ? object.twitterTitle
          : null,
      twitterDescription:
        object.twitterDescription && object.twitterDescription != ""
          ? object.twitterDescription
          : null,
      twitterImage: object.twitterImage
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        object.twitterImage.id
        : '',
      twitterSite:
        object.twitterSite && object.twitterSite != ""
          ? object.twitterSite
          : null,
      twitterCard:
        object.twitterCard && object.twitterCard != ""
          ? object.twitterCard
          : null,
      schemaDescription:
        object.schemaDescription && object.schemaDescription != ""
          ? object.schemaDescription
          : null,
    });
    this.setSeoAttributes(seo);
  }

  setSeoAttributes(seoObject: Seo) {
    //Set Title
    if (seoObject.title && seoObject.title != "") {
      this.titleService.setTitle(seoObject.title);
      //console.log("title " + seoObject.title);
    } else {
      this.titleService.setTitle(this.defaultTitle);
      //console.log(this.defaultTitle);
    }

    //Set Meta Title
    if (seoObject.metaTitle && seoObject.metaTitle != "") {
      this.metaService.updateTag({
        name: "title",
        content: seoObject.metaTitle,
      });
      //console.log("setting SEO ... " + seoObject.metaTitle);
    } else {
      this.metaService.updateTag({
        name: "title",
        content: this.defaultMetaTitle,
      });
    }

    //Set Meta Description
    if (seoObject.metaDescription && seoObject.metaDescription != "") {
      this.metaService.updateTag({
        name: "description",
        content: seoObject.metaDescription,
      });
    } else {
      this.metaService.updateTag({
        name: "description",
        content: this.defaultMetaDescription,
      });
    }

    //Set Meta Keywords
    if (seoObject.metaKeywords && seoObject.metaKeywords != "") {
      this.metaService.updateTag({
        name: "keywords",
        content: seoObject.metaKeywords,
      });
    } else {
      this.metaService.updateTag({
        name: "keywords",
        content: this.defaultMetaKeywords,
      });
    }

    //Set Fb Title
    if (seoObject.fbTitle && seoObject.fbTitle != "") {
      this.metaService.updateTag({
        name: "og_title",
        content: seoObject.fbTitle,
      });
    } else if (seoObject.metaTitle && seoObject.metaTitle != "") {
      this.metaService.updateTag({
        name: "og_title",
        content: seoObject.metaTitle,
      });
    } else {
      this.metaService.updateTag({
        name: "og_title",
        content: this.defaultTitle,
      });
    }

    //Set Fb Description
    if (seoObject.fbDescription && seoObject.fbDescription != "") {
      this.metaService.updateTag({
        name: "og_description",
        content: seoObject.fbDescription,
      });
    } else if (seoObject.metaTitle && seoObject.metaDescription != "") {
      this.metaService.updateTag({
        name: "og_description",
        content: seoObject.metaDescription,
      });
    } else {
      this.metaService.updateTag({
        name: "og_description",
        content: this.defaultMetaDescription,
      });
    }

    //Set Fb Image
    if (seoObject.fbImage && seoObject.fbImage != "") {
      this.metaService.updateTag({
        name: "og_image",
        content: seoObject.fbImage,
      });
    } else {
      this.metaService.updateTag({
        name: "og_image",
        content: this.defaultImage,
      });
    }

    //Set Fb Url
    if (seoObject.fbUrl && seoObject.fbUrl != "") {
      this.metaService.updateTag({ name: "og_url", content: seoObject.fbUrl });
    } else {
      this.metaService.updateTag({ name: "og_url", content: this.defaultUrl });
    }

    //Set Twitter Title
    if (seoObject.twitterTitle && seoObject.twitterTitle != "") {
      this.metaService.updateTag({
        name: "twitter:title",
        content: seoObject.twitterTitle,
      });
    } else if (seoObject.metaTitle && seoObject.metaTitle != "") {
      this.metaService.updateTag({
        name: "twitter:title",
        content: seoObject.metaTitle,
      });
    } else {
      this.metaService.updateTag({
        name: "twitter:title",
        content: this.defaultTitle,
      });
    }

    //Set Twitter Description
    if (seoObject.twitterDescription && seoObject.twitterDescription != "") {
      this.metaService.updateTag({
        name: "twitter:description",
        content: seoObject.twitterDescription,
      });
    } else if (seoObject.metaDescription && seoObject.metaDescription != "") {
      this.metaService.updateTag({
        name: "twitter:description",
        content: seoObject.metaDescription,
      });
    } else {
      this.metaService.updateTag({
        name: "twitter:description",
        content: this.defaultMetaDescription,
      });
    }

    //Set Twitter Image
    if (seoObject.twitterImage && seoObject.twitterImage != "") {
      this.metaService.updateTag({
        name: "twitter:image",
        content: seoObject.twitterImage,
      });
    } else {
      this.metaService.updateTag({
        name: "twitter:image",
        content: this.defaultImage,
      });
    }

    //Set Twitter Site
    if (seoObject.twitterSite && seoObject.twitterSite != "") {
      this.metaService.updateTag({
        name: "twitter:site",
        content: seoObject.twitterSite,
      });
    } else {
      this.metaService.updateTag({
        name: "twitter:site",
        content: this.defaultUrl,
      });
    }

    //Set Twitter Card
    if (seoObject.twitterCard && seoObject.twitterCard != "") {
      this.metaService.updateTag({
        name: "twitter:card",
        content: seoObject.twitterCard,
      });
    } else {
      this.metaService.updateTag({
        name: "twitter:card",
        content: this.defaultUrl,
      });
    }

    //set Schema Description

    if (seoObject.schemaDescription && seoObject.schemaDescription != "") {
      let script = this.renderer2.createElement("script");
      script.type = "application/ld+json";
      script.text = seoObject.schemaDescription;
      this.renderer2.appendChild(this.document.head, script);
    }
  }

  setSubcategorySeo(subcategory: any, location: any) {
    console.log("Sub_Category SEO " + subcategory);
    let seo = new Seo({
      title:
        subcategory.metaTitle && subcategory.metaTitle != ""
          ? (location && location !== null)
          ? subcategory.metaTitle.replace("UAE", location)
            : subcategory.metaTitle
          : subcategory.subCategoryName && subcategory.subCategoryName != ""
            ? subcategory.subCategoryName
            : null,
    metaTitle:
      subcategory.metaTitle && subcategory.metaTitle != ""
        ? (location && location !== null)
        ? subcategory.metaTitle.replace("UAE", location)
          : subcategory.metaTitle
        : subcategory.subCategoryName && subcategory.subCategoryName != ""
          ? subcategory.subCategoryName
          : null,
    metaDescription:
      subcategory.subCategoryDescription &&
        subcategory.subCategoryDescription != ""
        ? (location && location !== null)
        ? subcategory.subCategoryDescription.replaceAll("UAE", location)
        : subcategory.subCategoryDescription
        : null,
      metaKeywords:
        subcategory.keywords && subcategory.keywords != ""
          ? subcategory.keywords
          : null,
      fbTitle:
        subcategory.fbTitle && subcategory.fbTitle != ""
          ? subcategory.fbTitle
          : subcategory.metaTitle && subcategory.metaTitle != ""
            ? subcategory.metaTitle
            : subcategory.subCategoryName && subcategory.subCategoryName != ""
              ? subcategory.subCategoryName
              : null,
      fbDescription:
        subcategory.fbDescription && subcategory.fbDescription != ""
          ? subcategory.fbDescription
          : subcategory.subCategoryDescription &&
            subcategory.subCategoryDescription != ""
            ? subcategory.subCategoryDescription
            : null,
      fbImage: subcategory.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        subcategory.image.id
        : '',
      fbUrl:
        subcategory.fbUrl && subcategory.fbUrl != "" ? subcategory.fbUrl : null,
      twitterTitle:
        subcategory.twitterTitle && subcategory.twitterTitle != ""
          ? subcategory.twitterTitle
          : subcategory.metaTitle && subcategory.metaTitle != ""
            ? subcategory.metaTitle
            : subcategory.subCategoryName && subcategory.subCategoryName != ""
              ? subcategory.subCategoryName
              : null,
      twitterDescription:
        subcategory.twitterDescription && subcategory.twitterDescription != ""
          ? subcategory.twitterDescription
          : subcategory.subCategoryDescription &&
            subcategory.subCategoryDescription != ""
            ? subcategory.subCategoryDescription
            : null,
      twitterImage: subcategory.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        subcategory.image.id
        : '',
      twitterSite:
        subcategory.twitterSite && subcategory.twitterSite != ""
          ? subcategory.twitterSite
          : null,
      schemaDescription:
        subcategory.schemaDescription && subcategory.schemaDescription != ""
          ? subcategory.schemaDescription
          : null,
    });
    this.setSeoAttributes(seo);
  }

  setCategorySeo(category: any) {
    console.log("Category SEO "+category);
    let seo = new Seo({
      title:
        category.metaTitle && category.metaTitle != ""
          ? category.metaTitle
          : category.categoryName && category.categoryName != ""
            ? category.categoryName
            : null,
      metaTitle:
        category.metaTitle && category.metaTitle != ""
          ? category.metaTitle
          : category.categoryName && category.categoryName != ""
            ? category.categoryName
            : null,
      metaDescription:
        category.categoryDescription && category.categoryDescription != ""
          ? category.categoryDescription
          : null,
      metaKeywords:
        category.keywords && category.keywords != "" ? category.keywords : null,
      fbTitle:
        category.fbTitle && category.fbTitle != ""
          ? category.fbTitle
          : category.metaTitle && category.metaTitle != ""
            ? category.metaTitle
            : category.categoryName && category.categoryName != ""
              ? category.categoryName
              : null,
      fbDescription:
        category.fbDescription && category.fbDescription != ""
          ? category.fbDescription
          : category.categoryDescription && category.categoryDescription != ""
            ? category.categoryDescription
            : null,
      fbImage: category.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        category.image.id
        : '',
      fbUrl: category.fbUrl && category.fbUrl != "" ? category.fbUrl : null,
      twitterTitle:
        category.twitterTitle && category.twitterTitle != ""
          ? category.twitterTitle
          : category.metaTitle && category.metaTitle != ""
            ? category.metaTitle
            : category.categoryName && category.categoryName != ""
              ? category.categoryName
              : null,
      twitterDescription:
        category.twitterDescription && category.twitterDescription != ""
          ? category.twitterDescription
          : category.categoryDescription && category.categoryDescription != ""
            ? category.categoryDescription
            : null,
      twitterImage: category.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        category.image.id
        : '',
      twitterSite:
        category.twitterSite && category.twitterSite != ""
          ? category.twitterSite
          : null,
    });
    this.setSeoAttributes(seo);
  }

  setIndustrySeo(category: any) {
    console.log("Industry SEO -"+category);
    let seo = new Seo({
      title:
        category.metaTitle && category.metaTitle != ""
          ? category.metaTitle
          : category.categoryName && category.categoryName != ""
            ? category.categoryName
            : null,
      metaTitle:
        category.metaTitle && category.metaTitle != ""
          ? category.metaTitle
          : category.industryname && category.industryname != ""
            ? category.industryname
            : null,
      metaDescription:
        category.industryDescription && category.industryDescription != ""
          ? category.industryDescription
          : null,
      metaKeywords:
        category.keywords && category.keywords != "" ? category.keywords : null,
      fbTitle:
        category.fbTitle && category.fbTitle != ""
          ? category.fbTitle
          : category.metaTitle && category.metaTitle != ""
            ? category.metaTitle
            : category.categoryName && category.categoryName != ""
              ? category.categoryName
              : null,
      fbDescription:
        category.fbDescription && category.fbDescription != ""
          ? category.fbDescription
          : category.categoryDescription && category.categoryDescription != ""
            ? category.categoryDescription
            : null,
      fbImage: category.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        category.image.id
        : '',
      fbUrl: category.fbUrl && category.fbUrl != "" ? category.fbUrl : null,
      twitterTitle:
        category.twitterTitle && category.twitterTitle != ""
          ? category.twitterTitle
          : category.metaTitle && category.metaTitle != ""
            ? category.metaTitle
            : category.categoryName && category.categoryName != ""
              ? category.categoryName
              : null,
      twitterDescription:
        category.twitterDescription && category.twitterDescription != ""
          ? category.twitterDescription
          : category.categoryDescription && category.categoryDescription != ""
            ? category.categoryDescription
            : null,
      twitterImage: category.image
        ? TRADERSFIND.BASE_URL +
        "api/guest/imageContentDownload/" +
        category.image.id
        : '',
      twitterSite:
        category.twitterSite && category.twitterSite != ""
          ? category.twitterSite
          : null,
    });
    this.setSeoAttributes(seo);
  }

  setSellerSeo(seller: any) {
    let seo = new Seo({
      title: seller.metaTitle ? seller.metaTitle : seller.sellerCompanyName,
      metaTitle: seller.metaTitle ? seller.metaTitle : seller.sellerCompanyName,
      metaDescription: seller.metaDescription
        ? seller.metaDescription
        : seller.sellerTagline && seller.sellerTagline.trim() != ""
          ? seller.sellerTagline
          : seller.sellerCompanyName,
      metaKeywords:
        seller.metaKeywords != null && seller.metaKeywords != ""
          ? seller.metaKeywords.join(",")
          : seller.sellerCompanyName,
      fbTitle: seller.fbTitle ? seller.fbTitle : seller.sellerCompanyName,
      fbDescription: seller.fbDescription
        ? seller.fbDescription
        : seller.sellerCompanyName,
      fbUrl: seller.fbUrl ? seller.fbUrl : null,
      twitterTitle: seller.twitterTitle
        ? seller.twitterTitle
        : seller.sellerCompanyName,
      twitterDescription: seller.twitterDescription
        ? seller.twitterDescription
        : seller.sellerCompanyName,
    });

    this.setSeoAttributes(seo);
  }
}
