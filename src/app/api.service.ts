import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) {}
  getAPi(type: any):Observable<any>
  {
    return this._HttpClient.get(`http://api.giphy.com/v1/gifs/${type}?&api_key=rVPDOzcj59bRcGYEIbjdAH4IzwwY0vZz`);
  }
}
