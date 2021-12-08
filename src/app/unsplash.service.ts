import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient} from '@angular/common/http';
import { opSearch } from './general-val';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  public client_id='?client_id=tgVbKdb8DYJ1r1z8gzTyoyyx70X9JDY67S0ZZJQ5A7Y'//+ environment.access;
  public url = 'https://api.unsplash.com/';​
  constructor(private http:HttpClient) { }

  public searchImg() {
    return this.http.get(
      this.url + 'search/photos/' + this.client_id + '&query=' + opSearch.search + '&page=' + opSearch.pageIndex + '&per_page=' + opSearch.pageSize
    );
  }

  public getImg(Id) {
    return this.http.get(
      this.url + 'photos/' + Id + this.client_id
    );
  }
}
