import { 
    BaseHotelResultApp, 
    BaseHotelCardComponent,
    BaseSearchSummaryComponent,
    BaseImageSliderComponent,
    BaseFooterComponent,
    BaseHotelCountComponent,
    BaseNoResultFoundComponent,
    BaseFilterComponent,
    BaseFloatingButtonComponent,
    BaseSoldOutHotelComponent,
    BaseHotelMapComponent,
    BaseSortComponent,
    Logger
    } from "../../index";

import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export class HotelResultApp extends BaseHotelResultApp {

  public static CONTAINER_ID = Symbol.for('BaseHotelResultApp');
  protected searchSummaryComponent: BaseSearchSummaryComponent;
  protected imageSliderComponent: BaseImageSliderComponent;
  protected hotelCardComponent: BaseHotelCardComponent;
  protected footerComponent: BaseFooterComponent;
  protected hotelCountComponent: BaseHotelCountComponent;
  protected noResultsFoundComponent: BaseNoResultFoundComponent;
  protected filterComponent: BaseFilterComponent;
  protected floatingButtonComponent: BaseFloatingButtonComponent;
  protected soldOutHotelComponent: BaseSoldOutHotelComponent;
  protected hotelMapComponent: BaseHotelMapComponent;
  protected sortComponent: BaseSortComponent;

    protected get hotelCards() {
        return $$("orxe-card");
    }

    public constructor(
        @inject(BaseSearchSummaryComponent.CONTAINER_ID) searchSummary:BaseSearchSummaryComponent,
        @inject(BaseHotelCountComponent.CONTAINER_ID) hotelCount:BaseHotelCountComponent,
        @inject(BaseImageSliderComponent.CONTAINER_ID) imageSlider:BaseImageSliderComponent,
        @inject(BaseHotelCardComponent.CONTAINER_ID) hotelCard:BaseHotelCardComponent,
        @inject(BaseFooterComponent.CONTAINER_ID) footer:BaseFooterComponent,
        @inject(BaseNoResultFoundComponent.CONTAINER_ID) noResultsFound:BaseNoResultFoundComponent,
        @inject(BaseFilterComponent.CONTAINER_ID) filter: BaseFilterComponent,
        @inject(BaseFloatingButtonComponent.CONTAINER_ID) floatingButton: BaseFloatingButtonComponent,
        @inject(BaseSoldOutHotelComponent.CONTAINER_ID) soldOutHotel: BaseSoldOutHotelComponent,
        @inject(BaseSortComponent.CONTAINER_ID) sortComponent: BaseSortComponent,
        @inject(BaseHotelMapComponent.CONTAINER_ID) hotelMapComponent: BaseHotelMapComponent
        ){
        super(searchSummary, hotelCount, imageSlider, hotelCard, footer, noResultsFound, filter, floatingButton, soldOutHotel,hotelMapComponent, sortComponent )
    }

    public waitUntilPageLoaded() {
        Logger.debug('Waiting until hotel result page is loaded');
        browser.waitUntil(() => this.hotelCards.length > 0, {
          timeout: 10000,
          timeoutMsg: `hotel result page not loaded`,
        });
    }

    public getHotelCount() {
        return this.hotelCards.length;
    }
}