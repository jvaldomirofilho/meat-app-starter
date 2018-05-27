import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';

import { MEAT_API } from '../app.api'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService {

    // tslint:disable-next-line:one-line
    constructor(private http: Http){

    }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }

    // tslint:disable-next-line:one-line
    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }




}
