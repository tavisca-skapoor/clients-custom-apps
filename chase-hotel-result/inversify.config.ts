import { Container } from 'inversify';
import {
    HotelResultApp,
    BaseHotelCardComponent,
    BaseHotelResultContainer,
    BaseSearchSummaryComponent,
    BaseHotelCountComponent,
    BaseImageSliderComponent,
    BaseFooterComponent,
    BaseNoResultFoundComponent,
    BaseFilterComponent,
    BaseFloatingButtonComponent,
    BaseSoldOutHotelComponent,
    BaseHotelMapComponent,
    BaseSortComponent,
    BaseNavigation,
    LowestPriceSort,
    StarRatingSort,
    TripAdvisorSort,
    HotelNameDescSort,
    HotelNameAscSort,
    DistanceSort,
    StarRatingFilter,
    TripAdvisorRatingFilter,
    AmenitiesFilter,
    TrustYouScoreFilter,
    HotelStyleFilter,
    DealsLookup,
    StarRatingLookup,
    BaseHotelMapLinkComponent,
    SortByLowestPriceComponent,
    SortByStarRatingComponent,
    SortByDistanceComponent,
    SortByTripAdvisorComponent,
    SortByNameAscComponent,
    SortByNameDescComponent,
    StarRatingFilterComponent,
    TripAdvisorRatingFilterComponent,
    AmenitiesFilterComponent,
    HotelStyleFilterComponent,
    TrustYourScoreFilterComponent,
    Navigation
} from './index';

let container = new Container();
container.parent = BaseHotelResultContainer;

// DSL binding
container.bind<HotelResultApp>(HotelResultApp.CONTAINER_ID).to(HotelResultApp);

// POM binding
container.bind<BaseHotelCardComponent>(BaseHotelCardComponent.CONTAINER_ID).to(BaseHotelCardComponent);
container.bind<BaseSearchSummaryComponent>(BaseSearchSummaryComponent.CONTAINER_ID).to(BaseSearchSummaryComponent);
container.bind<BaseImageSliderComponent>(BaseImageSliderComponent.CONTAINER_ID).to(BaseImageSliderComponent);
container.bind<BaseHotelCountComponent>(BaseHotelCountComponent.CONTAINER_ID).to(BaseHotelCountComponent);
container.bind<BaseNoResultFoundComponent>(BaseNoResultFoundComponent.CONTAINER_ID).to(BaseNoResultFoundComponent);
container.bind<BaseFooterComponent>(BaseFooterComponent.CONTAINER_ID).to(BaseFooterComponent);
container.bind<BaseFloatingButtonComponent>(BaseFloatingButtonComponent.CONTAINER_ID).to(BaseFloatingButtonComponent);
container.bind<BaseSoldOutHotelComponent>(BaseSoldOutHotelComponent.CONTAINER_ID).to(BaseSoldOutHotelComponent);
container.bind<BaseHotelMapComponent>(BaseHotelMapComponent.CONTAINER_ID).to(BaseHotelMapComponent);
container.bind<BaseHotelMapLinkComponent>(BaseHotelMapLinkComponent.CONTAINER_ID).to(BaseHotelMapLinkComponent);

container.bind<BaseSortComponent>(BaseSortComponent.CONTAINER_ID).to(BaseSortComponent);
container.bind<SortByLowestPriceComponent>(SortByLowestPriceComponent.CONTAINER_ID).to(SortByLowestPriceComponent);
container.bind<SortByStarRatingComponent>(SortByStarRatingComponent.CONTAINER_ID).to(SortByStarRatingComponent);
container.bind<SortByDistanceComponent>(SortByDistanceComponent.CONTAINER_ID).to(SortByDistanceComponent);
container.bind<SortByTripAdvisorComponent>(SortByTripAdvisorComponent.CONTAINER_ID).to(SortByTripAdvisorComponent);
container.bind<SortByNameAscComponent>(SortByNameAscComponent.CONTAINER_ID).to(SortByNameAscComponent);
container.bind<SortByNameDescComponent>(SortByNameDescComponent.CONTAINER_ID).to(SortByNameDescComponent);

container.bind<BaseFilterComponent>(BaseFilterComponent.CONTAINER_ID).to(BaseFilterComponent);
container.bind<StarRatingFilterComponent>(StarRatingFilterComponent.CONTAINER_ID).to(StarRatingFilterComponent);
container.bind<TripAdvisorRatingFilterComponent>(TripAdvisorRatingFilterComponent.CONTAINER_ID).to(TripAdvisorRatingFilterComponent);
container.bind<AmenitiesFilterComponent>(AmenitiesFilterComponent.CONTAINER_ID).to(AmenitiesFilterComponent);
container.bind<HotelStyleFilterComponent>(HotelStyleFilterComponent.CONTAINER_ID).to(HotelStyleFilterComponent);
container.bind<TrustYourScoreFilterComponent>(TrustYourScoreFilterComponent.CONTAINER_ID).to(TrustYourScoreFilterComponent);

container.bind<LowestPriceSort>(LowestPriceSort.CONTAINER_ID).to(LowestPriceSort);
container.bind<StarRatingSort>(StarRatingSort.CONTAINER_ID).to(StarRatingSort);
container.bind<TripAdvisorSort>(TripAdvisorSort.CONTAINER_ID).to(TripAdvisorSort);
container.bind<HotelNameDescSort>(HotelNameDescSort.CONTAINER_ID).to(HotelNameDescSort);
container.bind<HotelNameAscSort>(HotelNameAscSort.CONTAINER_ID).to(HotelNameAscSort);
container.bind<DistanceSort>(DistanceSort.CONTAINER_ID).to(DistanceSort);

container.bind<StarRatingFilter>(StarRatingFilter.CONTAINER_ID).to(StarRatingFilter);
container.bind<TripAdvisorRatingFilter>(TripAdvisorRatingFilter.CONTAINER_ID).to(TripAdvisorRatingFilter);
container.bind<AmenitiesFilter>(AmenitiesFilter.CONTAINER_ID).to(AmenitiesFilter);
container.bind<TrustYouScoreFilter>(TrustYouScoreFilter.CONTAINER_ID).to(TrustYouScoreFilter);
container.bind<HotelStyleFilter>(HotelStyleFilter.CONTAINER_ID).to(HotelStyleFilter);

container.bind<DealsLookup>(DealsLookup.CONTAINER_ID).to(DealsLookup);
container.bind<StarRatingLookup>(StarRatingLookup.CONTAINER_ID).to(StarRatingLookup);


// Utils binding
container.bind<Navigation>(BaseNavigation.CONTAINER_ID).to(Navigation);

export { container };