import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostBuyRequirementsComponent } from './components/post-buy-requirements/post-buy-requirements.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'industry',
      loadChildren: () =>
        import('./components/industory/industory.module').then(
          (m) => m.IndustoryModule
        ),
    },
  
    //{ path: 'carousel', loadChildren: () => import('./components/search-listing/carousel-feature/carousel-feature.module').then(m => m.CarouselFeatureModule) },
  
    { path: 'productcard', loadChildren: () => import('./components/search-listing/product-card/product-card.module').then(m => m.ProductCardModule) },
  
    {
      path: 'group-category',
      loadChildren: () =>
        import('./components/category/category.module').then(
          (m) => m.CategoryModule
        ),
    },
    {
      path: 'post-buy-requirements',
      loadChildren: () => import('./components/post-buy-requirements/post-buy-requirements.module').then(m=>m.PostBuyRequirementsModule)
    },
    {
      path: 'advertise-with-us',
      loadChildren: () =>
        import('./components/advertise-with-us/advertise-with-us.module').then(
          (m) => m.AdvertiseWithUsModule
        ),
    },
    {
      path: 'feedback',
      loadChildren: () =>
        import('./components/send-feedback/send-feedback.module').then(
          (m) => m.SendFeedbackModule
        ),
    },
    {
      path: 'complaint',
      loadChildren: () =>
        import('./components/send-feedback/send-feedback.module').then(
          (m) => m.SendFeedbackModule
        ),
    },
    {
      path: 'buyer-faq',
      loadChildren: () =>
        import('./components/buyer-faq/buyer-faq.module').then(
          (m) => m.BuyerFaqModule
        ),
    },
  
    {
      path: 'seller-faq',
      loadChildren: () =>
        import('./components/seller-faq/seller-faq.module').then(
          (m) => m.SellerFaqModule
        ),
    },
    {
      path: 'sell-your-products',
      loadChildren: () =>
        import('./components/sell-your-products/sell-your-products.module').then(
          (m) => m.SellYourProductsModule
        ),
    },
  
    {
      path: 'browse-sellers',
      loadChildren: () =>
        import('./components/industory/industory.module').then(
          (m) => m.IndustoryModule
        ),
    },
    {
      path: 'search',
      loadChildren: () =>
        import('./components/search-listing/search-listing.module').then(
          (m) => m.SearchListingModule
        ),
    },
    {
      path: 'category',
      loadChildren: () =>
        import('./components/search-listing/search-listing.module').then(
          (m) => m.SearchListingModule
        ),
    },
    {
      path: 'seller',
      loadChildren: () =>
        import('./components/seller-website/seller-website.module').then(
          (m) => m.SellerWebsiteModule
        ),
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./components/user-login/user-login.module').then(
          (m) => m.UserLoginModule
        ),
    },
    {
      path: 'otp',
      loadChildren: () =>
        import('./components/dialog/otp/otp.module').then(
          (m) => m.OtpModule
        ),
    },
    {
      path: 'register-your-business',
      loadChildren: () =>
        import('./components/user-registration/user-registration.module').then(
          (m) => m.UserRegistrationModule
        ),
    },
    {
      path: 'product',
      loadChildren: () =>
        import('./components/product-details/product-details.module').then(
          (m) => m.ProductDetailsModule
        ),
    },
    {
      path: 'about-us',
      loadChildren: () =>
        import('./components/aboutus/aboutus.module').then(
          (m) => m.AboutusModule
        ),
    },
    {
      path: 'contact-us',
      loadChildren: () =>
        import('./components/contactus/contactus.module').then(
          (m) => m.ContactusModule
        ),
    },
    {
      path: 'privacy-policy',
      loadChildren: () =>
        import('./components/privacy-policy/privacy-policy.module').then(
          (m) => m.PrivacyPolicyModule
        ),
    },
    {
      path: 'term-and-conditions',
      loadChildren: () =>
        import('./components/termandc/termandc.module').then(
          (m) => m.TermandcModule
        ),
    },
  
    {
      path: 'blog',
      loadChildren: () =>
        import('./components/blog-list/blog-list.module').then(
          (m) => m.BlogListModule
        ),
    },
  
    {
      path: 'account-activation',
      loadChildren: () =>
        import('./components/account-activation/account-activation.module').then(
          (m) => m.AccountActivationModule
        ),
    },
    {
      path: 'not-found',
      loadChildren: () =>
        import('./components/notfound/notfound.module').then(
          (m) => m.NotfoundModule
        ),
    },
  
    {
      path: '**', redirectTo: '/not-found'
    },
  
  ];
