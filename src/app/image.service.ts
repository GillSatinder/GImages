import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage = '&per_page=10';

  constructor(private http: HttpClient) { }


  getImage(query) {
  return this.http.get(this.URL + query + this.perPage).
  map(res => res);
}
}
