import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl
  constructor(private httpClient: HttpClient) { }
  postService(url: string = '', reqPayload: Object = {}, token: boolean = false, httpOptions: any = {}) {
    console.log("data in http",reqPayload);
    return this.httpClient.post(this.BaseUrl + url, reqPayload, token && httpOptions)

  }
  Getservice(url = '', token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.get(this.BaseUrl+url,token && httpOptions)
  }
  PutService(url: string,data: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.put(this.BaseUrl + url,data,token && httpOptions)
  }
  
  DeleteService(url: string, data: any = null, token: any = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.delete(this.BaseUrl + url, token && httpOptions)
  }
}
