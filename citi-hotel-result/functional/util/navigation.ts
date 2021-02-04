import { BaseNavigation } from '../../index';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class Navigation extends BaseNavigation {

    goToHotelSearch(){
        browser.url('/orxe/client/landing_page/results');
    }
}